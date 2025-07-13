import { useMemo, useState } from 'react';
import { BasicEventType } from '../types';

export const usePagination = (
  items: BasicEventType[],
  itemsPerPage: number
) => {
  const [page, setPage] = useState(1);

  const currentItems = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return items?.slice(startIndex, startIndex + itemsPerPage);
  }, [page, items, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return { page, currentItems, handlePrevPage, handleNextPage, totalPages };
};
