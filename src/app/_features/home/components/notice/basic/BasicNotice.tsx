'use client';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { isWithinHours } from '@/app/_utils/isWithin24Hours';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import Loading from '@/app/_components/common/Loading';
import BasicNoticeItem from './BasicNoticeItem';
import NoticePagination from '../../pagination/NoticePagination';
import { BasicNoticeProps } from '../../../types';

const BasicNotice = ({
  items,
  mainTitle,
  className,
  itemsPerPage = 5,
  isLoading,
  isError,
}: BasicNoticeProps) => {
  const [page, setPage] = useState(1);

  const currentItems = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return items?.slice(startIndex, startIndex + itemsPerPage);
  }, [page, items, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (isError) {
    return (
      <ErrorDisplay
        content={
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">{mainTitle}</p>
            <div className="flex flex-col gap-2 text-center text-xs text-red-100">
              <p>서버 점검이나 일시적인 오류로 데이터를 불러오지 못했습니다.</p>
              <p>잠시 후 다시 시도해 주세요.</p>
            </div>
          </div>
        }
      />
    );
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className={clsx('flex flex-col', className)}>
      <p className="text-sm">{mainTitle}</p>
      <div className="flex h-full w-full flex-col rounded-md">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <ul className="flex flex-col gap-2 text-sm">
              {currentItems?.map((item) => {
                const date = item?.date ? item?.date : item?.date_event_start;
                const is24InHours = isWithinHours(date || '', 24);
                return (
                  <BasicNoticeItem
                    key={item.notice_id}
                    isIn24={is24InHours}
                    date={item?.date || ''}
                    title={item?.title}
                    url={item?.url}
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

export default BasicNotice;
