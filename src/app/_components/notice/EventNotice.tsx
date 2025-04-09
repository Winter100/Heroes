"use client";
import clsx from "clsx";
import { ComponentProps, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "../common/Loading";
import { EventDate } from "@/app/_store/noticeEventStore";
import ErrorDisplay from "../common/error/ErrorDisplay";
import EventNoticeItem from "./EventNoticeItem";

interface NoteListProps extends ComponentProps<"div"> {
  mainTitle: string;
  eventDate: EventDate | null;
  setEventDate: (date: EventDate | null) => void;
  items: {
    title: string;
    url: string;
    notice_id: number;
    date?: string;
    date_event_start?: string;
    date_event_end?: string;
  }[];
  itemsPerPage?: number;
  isLoading: boolean;
  isError: Error | null;
}

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

  const sortedItems = currentItems?.slice().sort((a, b) => {
    const aStart = a.date_event_start
      ? new Date(a.date_event_start).getTime()
      : Infinity;
    const bStart = b.date_event_start
      ? new Date(b.date_event_start).getTime()
      : Infinity;

    const aEnd = a.date_event_end
      ? new Date(a.date_event_end).getTime()
      : Infinity;
    const bEnd = b.date_event_end
      ? new Date(b.date_event_end).getTime()
      : Infinity;
    if (aEnd !== bEnd) return aEnd - bEnd;
    return aStart - bStart;
  });

  return (
    <div className={clsx("flex flex-col", className)}>
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
            <div className="flex h-10 w-full items-center justify-between gap-2 p-2 text-xs">
              <Button
                variant="ghost"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                <IoIosArrowBack />
              </Button>

              <div className="flex items-center justify-center">
                {page} / {totalPages}
              </div>

              <Button
                variant="ghost"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
              >
                <IoIosArrowForward />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventNotice;
