import { Button } from '@/components/ui/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NoticePaginationProps } from '../../types';

const NoticePagination = ({
  handlePrevPage,
  handleNextPage,
  prevDisable,
  nextDisable,
  page,
  totalPages,
}: NoticePaginationProps) => {
  return (
    <div className="flex h-10 w-full items-center justify-between gap-2 p-2 text-xs">
      <Button variant="ghost" onClick={handlePrevPage} disabled={prevDisable}>
        <IoIosArrowBack />
      </Button>

      <div className="flex items-center justify-center">
        {page} / {totalPages}
      </div>

      <Button variant="ghost" onClick={handleNextPage} disabled={nextDisable}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default NoticePagination;
