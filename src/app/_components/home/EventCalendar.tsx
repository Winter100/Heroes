"use client";

import { useEventNoticeDateStore } from "@/app/_store/noticeEventStore";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useMemo } from "react";

const EventCalendar = () => {
  const today = useMemo(() => new Date(), []);
  const eventDate = useEventNoticeDateStore((state) => state.eventDate);
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <Calendar
        showOutsideDays={false}
        numberOfMonths={2}
        mode="range"
        selected={{
          from: new Date(eventDate?.start || ""),
          to: new Date(eventDate?.end || ""),
        }}
        styles={{ cell: { minWidth: "32px" } }}
        locale={ko}
        formatters={{
          formatCaption: (date) => format(date, "yyyy년 M월", { locale: ko }),
        }}
        modifiers={{ today }}
        modifiersStyles={{
          range_start: {
            backgroundColor: "inherit",
            color: "white",
          },
          range_middle: {},
          range_end: {
            backgroundColor: "inherit",
            color: "white",
          },
          today: {
            border: "1px solid #9fcffc",
            borderRadius: "10px",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};

export default EventCalendar;
