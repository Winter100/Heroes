"use client";

import React from "react";
import { useNotice } from "@/app/_hooks/useNotice/useNotice";
import { NoticeEventDataType } from "@/app/_type/noticeType";
import EventNotice from "../notice/EventNotice";
import { useEventNoticeDateStore } from "@/app/_store/noticeEventStore";

const HomeEventNotice = () => {
  const {
    data: noticeEventData,
    isLoading: noticeEventLoading,
    error: noticeEventError,
  } = useNotice<NoticeEventDataType>("notice-event");
  const eventDate = useEventNoticeDateStore((state) => state.eventDate);
  const setEventDate = useEventNoticeDateStore((state) => state.setEventDate);

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <EventNotice
        className="h-full w-full"
        mainTitle=""
        isLoading={noticeEventLoading}
        isError={noticeEventError}
        items={noticeEventData?.event_notice || []}
        itemsPerPage={6}
        eventDate={eventDate}
        setEventDate={setEventDate}
      />
    </div>
  );
};

export default HomeEventNotice;
