'use client';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import NoticePagination from './NoticePagination';
import { cn } from '@/lib/utils';
import { BasicNoticeProps } from '../../types';
import { usePagination } from '../../hooks/usePagination';
import { sortEventsByDate } from '../../utils/sortEventsByDate';
import NoticeItemRenderer from './NoticeItemRenderer';

const BasicNotice = ({
  items,
  mainTitle,
  className,
  itemsPerPage = 5,
  isLoading,
  isError,
  eventType,
}: BasicNoticeProps) => {
  const { page, currentItems, handleNextPage, handlePrevPage, totalPages } =
    usePagination(items, itemsPerPage);

  if (isError) return <ErrorApi />;

  const isBasicEvent = eventType === 'basic';

  const eventList = isBasicEvent
    ? currentItems
    : sortEventsByDate(currentItems);

  return (
    <div
      className={cn(
        'h-full min-h-60 w-full items-center justify-center gap-1',
        className
      )}
    >
      <p className="text-center text-sm">{mainTitle}</p>
      <div className="flex h-full w-full flex-col rounded-md">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <ul
              className={cn(
                'gap-2 p-2 text-sm',
                isBasicEvent && 'flex flex-col',
                !isBasicEvent && 'grid grid-cols-2 grid-rows-3 md:grid-cols-3'
              )}
            >
              {eventList?.map((item) => (
                <NoticeItemRenderer
                  key={item.notice_id}
                  item={item}
                  isBasicEvent={isBasicEvent}
                />
              ))}
            </ul>
            <NoticePagination
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              prevDisable={page === 1}
              nextDisable={page === totalPages}
              page={page}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BasicNotice;
