"use client";
import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "../common/Loading";
import { isWithinHours } from "@/app/_utils/isWithin24Hours";
import { convertToKST } from "@/app/_utils/convertToKST";
import { getRemainingTime, getYearMonthDay } from "../preview/utils/dateEvent";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EventDate } from "@/app/_store/noticeEventStore";
import { SquareArrowOutUpRight } from "lucide-react";
import ErrorDisplay from "../common/error/ErrorDisplay";

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

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className={clsx("flex flex-col", className)}>
      <p className="text-sm">{mainTitle}</p>
      <div className="flex h-full w-full flex-col rounded-md">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <ul className="grid h-full gap-2 p-2 text-sm lg:grid-rows-6">
              {currentItems?.map((item) => {
                const date = item?.date ? item?.date : item?.date_event_start;
                const is24InHours = isWithinHours(date || "", 24);
                return (
                  <li key={item.notice_id} className="flex flex-1 gap-2">
                    <button
                      onClick={() => {
                        const newEvent = {
                          notice_id: item.notice_id,
                          start: item.date_event_start || "",
                          end: item.date_event_end || "",
                        };
                        setEventDate(newEvent);
                      }}
                      className="h-full w-full"
                      rel="noopener noreferrer"
                    >
                      <div
                        title={item.title}
                        className={cn(
                          "flex h-full gap-1 rounded-md border border-transparent bg-backgroundOne p-2 hover:text-white",
                          eventDate?.notice_id === item.notice_id &&
                            "border-blue-300 text-white",
                        )}
                      >
                        <div className="relative flex w-full flex-wrap items-center justify-center gap-2">
                          <div>
                            <span>
                              {is24InHours && (
                                <span className="pr-1 text-xs text-red-600">
                                  N
                                </span>
                              )}
                              {item.title}
                            </span>
                            {item?.date_event_start && (
                              <div className="text-center text-xs">
                                {`${getYearMonthDay(
                                  convertToKST(item?.date_event_start || ""),
                                )} ~ ${getYearMonthDay(
                                  convertToKST(item?.date_event_end || ""),
                                )}`}
                              </div>
                            )}

                            <Badge
                              variant="destructive"
                              className={cn(
                                "right-0 top-0 mx-auto block w-24 lg:absolute",
                              )}
                            >
                              {item?.date_event_end
                                ? getRemainingTime(item?.date_event_end || "")
                                : "상시"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </button>
                    <div className="flex items-end justify-start">
                      <Link
                        href={item?.url}
                        target="_blank"
                        className="hover:text-white"
                      >
                        <SquareArrowOutUpRight size={15} />
                      </Link>
                    </div>
                  </li>
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
