'use client';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import Loading from '@/app/_components/common/Loading';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import { NoteListProps } from '../../../types';
import { sortEventsByDate } from '../../../utils/sortEventsByDate';
import EventNoticeItem from './EventNoticeItem';
import NoticePagination from '../../pagination/NoticePagination';

const EventNotice = ({
  items,
  mainTitle,
  className,
  itemsPerPage = 5,
  isLoading,
  eventDate,
  setEventDate,
  isError,
}: NoteListProps) => {
  const [page, setPage] = useState(1);

  const currentItems = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return items?.slice(startIndex, startIndex + itemsPerPage);
  }, [page, items, itemsPerPage]);

  const sortedItems = sortEventsByDate(currentItems);

  if (isError) {
    return (
      <ErrorDisplay
        content={
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-sm">{mainTitle}</p>
            <div className="flex flex-col gap-2 text-center text-xs text-red-100">
              <p>서버 점검이나 일시적인 오류로 데이터를 불러오지 못했습니다.</p>
              <p>잠시 후 다시 시도해 주세요.</p>
            </div>
          </div>
        }
      />
    );
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className={clsx('flex flex-col', className)}>
      <p className="text-center text-sm">{mainTitle}</p>
      <div className="flex h-full w-full flex-col truncate rounded-md">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <ul className="grid h-full grid-cols-2 grid-rows-3 gap-4 p-2 text-sm">
              {sortedItems?.map((item) => {
                return (
                  <EventNoticeItem
                    key={item.notice_id}
                    selectDate={eventDate}
                    setEventDate={setEventDate}
                    {...item}
                  />
                );
              })}
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

export default EventNotice;
