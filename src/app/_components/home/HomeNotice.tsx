"use client";
import React from "react";
import Notice from "../notice/Notice";
import { useNotice } from "@/app/_hooks/useNotice/useNotice";
import { NoticeDataType, NoticePatchDataType } from "@/app/_type/noticeType";
import RoundedContainer from "../layout/RoundedContainer";

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

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <RoundedContainer className="flex flex-1 truncate bg-muted/50">
        <Notice
          className="h-full w-full items-center justify-center gap-1"
          mainTitle="공지사항"
          isLoading={noticeLoading}
          isError={noticeError}
          items={noticeData?.notice || []}
          itemsPerPage={5}
        />
      </RoundedContainer>
      <RoundedContainer className="flex flex-1 truncate bg-muted/50">
        <Notice
          className="h-full w-full items-center justify-center gap-1"
          mainTitle="패치노트"
          isLoading={noticePatchLoading}
          isError={noticePatchError}
          items={noticePatchData?.patch_notice || []}
          itemsPerPage={5}
        />
      </RoundedContainer>
    </div>
  );
};

export default HomeNotice;
