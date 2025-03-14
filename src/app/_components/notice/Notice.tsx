"use client";
import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "../common/Loading";
import { isWithinHours } from "@/app/_utils/isWithin24Hours";

interface NoteListProps extends ComponentProps<"div"> {
  mainTitle: string;
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
const Notice = ({
  items,
  mainTitle,
  className,
  itemsPerPage = 5,
  isLoading,
  isError,
}: NoteListProps) => {
  const [page, setPage] = useState(1);

  const currentItems = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return items?.slice(startIndex, startIndex + itemsPerPage);
  }, [page, items, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className={clsx("flex min-h-72 flex-col", className)}>
      <p className="text-sm">{mainTitle}</p>
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col rounded-md bg-backgroundOne">
          <ul className="flex h-full flex-col gap-2 p-2 text-sm">
            {currentItems?.map((item) => {
              const date = item?.date ? item?.date : item?.date_event_start;
              const is24InHours = isWithinHours(date || "", 24);
              return (
                <li key={item.notice_id} className="flex w-full">
                  <Link
                    className="block w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                  >
                    <div
                      title={item.title}
                      className="flex flex-col gap-1 rounded-md bg-backgroundTap-1 p-2 outline-1 outline-borderColor/50 hover:outline"
                    >
                      <div className="truncate">
                        {is24InHours && (
                          <span className="text-xs text-red-600">N</span>
                        )}
                        <span className="pl-1">{item.title}</span>
                      </div>
                    </div>
                  </Link>
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
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              <IoIosArrowForward />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
