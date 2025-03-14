"use client";
import React from "react";
import Notice from "../notice/Notice";
import ScreenContainer from "../layout/ScreenContainer";
import { useNotice } from "@/app/_hooks/useNotice/useNotice";
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from "@/app/_type/noticeType";

const HomeNotice = () => {
  const {
    data: noticeData,
    isLoading: noticeLoading,
    error: noticeError,
  } = useNotice<NoticeDataType>("notice");

  const {
    data: noticePatchData,
    isLoading: noticePatchLoading,
    error: noticePatchError,
  } = useNotice<NoticePatchDataType>("notice-patch");

  const {
    data: noticeEventData,
    isLoading: noticeEventLoading,
    error: noticeEventError,
  } = useNotice<NoticeEventDataType>("notice-event");

  return (
    <ScreenContainer className="grid grid-cols-1 items-center justify-items-center gap-5 px-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
      <Notice
        className="h-full w-full max-w-md items-center justify-center gap-1"
        mainTitle="공지사항"
        isLoading={noticeLoading}
        isError={noticeError}
        items={noticeData?.notice || []}
        itemsPerPage={5}
      />
      <Notice
        className="h-full w-full max-w-md items-center justify-center gap-1"
        mainTitle="패치노트"
        isLoading={noticePatchLoading}
        isError={noticePatchError}
        items={noticePatchData?.patch_notice || []}
        itemsPerPage={5}
      />
      <Notice
        className="h-full w-full max-w-md items-center justify-center gap-1"
        mainTitle="이벤트"
        isLoading={noticeEventLoading}
        isError={noticeEventError}
        items={noticeEventData?.event_notice || []}
        itemsPerPage={5}
      />
    </ScreenContainer>
  );
};

export default HomeNotice;
