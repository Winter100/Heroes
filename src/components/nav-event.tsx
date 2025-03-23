"use client";

import { type LucideIcon } from "lucide-react";
import { SidebarGroup } from "@/components/ui/sidebar";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import eventList from "@/app/_constant/jsonData/event.json";
import { convertToKST } from "@/app/_utils/convertToKST";
import { parse } from "date-fns";

function parseKoreanDate(dateString: string) {
  return parse(dateString, "yyyy. M. d. a h:mm:ss", new Date(), { locale: ko });
}

function convertYMD(dateString: string) {
  return format(parseKoreanDate(dateString), "yyyy년 M월 d일", { locale: ko });
}

export function NavEvent({
  label,
  items,
}: {
  label: string;
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const filteredData = eventList.event_notice.filter(
    (e) => e.ongoing_flag === "false",
  );
  return (
    <SidebarGroup className="items-center overflow-x-hidden">
      {/* <SidebarGroupLabel>{label}</SidebarGroupLabel> */}
      <div className="flex shrink-0 flex-col items-center rounded-md text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 [&>svg]:size-4 [&>svg]:shrink-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          styles={{ cell: { minWidth: "32px" } }}
          showOutsideDays={false}
          locale={ko}
          formatters={{
            formatCaption: (date) => format(date, "yyyy년 M월", { locale: ko }),
          }}
        />
        <ul className="flex flex-col gap-2">
          {filteredData.map((f) => (
            <li key={f.notice_id}>
              <div className="text-center text-sm">{f.title}</div>
              <div className="flex flex-row gap-1 opacity-50">
                <div>{convertYMD(convertToKST(f.date_event_start || ""))}</div>
                <div>~</div>
                <div>{convertYMD(convertToKST(f.date_event_end || ""))}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SidebarGroup>
  );
}
