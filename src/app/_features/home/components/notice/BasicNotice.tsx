'use client';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import NoticePagination from './NoticePagination';
import { cn } from '@/lib/utils';
import { BasicNoticeProps } from '../../types';
import { usePagination } from '../../hooks/usePagination';
import { sortEventsByDate } from '../../utils/sortEventsByDate';
import NoticeItemRenderer from './NoticeItemRenderer';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { BookText, BookUser, Calendar, Clock } from 'lucide-react';

const eventTable = [
  { title: '이벤트', icon: BookText, haedClassName: 'w-2/5' },
  { title: '기간', icon: Calendar, haedClassName: '' },
  { title: '남은 기간', icon: Clock, haedClassName: 'w-1/6' },
  { title: '자세히', icon: BookUser, haedClassName: 'w-1/7 md:w-1/6' },
];

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
            {isBasicEvent ? (
              <ul className={cn('flex flex-col gap-2 p-2 text-sm')}>
                {eventList?.map((item) => (
                  <NoticeItemRenderer
                    key={item.notice_id}
                    item={item}
                    isBasicEvent={isBasicEvent}
                  />
                ))}
              </ul>
            ) : (
              <Table className="caption-top">
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow>
                    {eventTable.map((table) => (
                      <TableHead
                        key={table.title}
                        className={cn('text-inherit', table.haedClassName)}
                      >
                        <div className="flex flex-row items-center justify-center gap-2">
                          {table.icon && <table.icon size={15} />}
                          <p className="hidden md:block">{table.title}</p>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {eventList?.map((item) => (
                    <NoticeItemRenderer
                      key={item.notice_id}
                      item={item}
                      isBasicEvent={isBasicEvent}
                    />
                  ))}
                </TableBody>
              </Table>
            )}
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
