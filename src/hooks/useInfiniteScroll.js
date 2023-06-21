import { useState, useRef, useCallback, useEffect } from "react";

const useInfiniteScroll = (pagination, callback) => {
	const observer = useRef();

	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(0);

	const elementRef = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setCurrentPage((prevPage) => {
							return prevPage < totalPages
								? prevPage + 1
								: prevPage;
						});
					}
				},
				{
					threshold: 0.75,
				}
			);
			if (node) observer.current.observe(node);
		},
		[totalPages]
	);

	const fetchNextPageResults = async () => {
		if (currentPage > 1 && currentPage <= totalPages) {
			setIsLoading(true);
			await callback(currentPage, itemsPerPage);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchNextPageResults();
	}, [currentPage]);

	useEffect(() => {
		if (pagination) {
			setCurrentPage(1);
			setTotalPages(pagination.totalPages);
			setItemsPerPage(pagination.perPage);
		}
	}, [pagination]);

	return { elementRef, isLoading, currentPage, totalPages };
};

export default useInfiniteScroll;
