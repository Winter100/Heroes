'use client';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import HomeTopImage from './top/HomeTopImage';
import BasicNotice from './notice/BasicNotice';
import { useNotice } from '../hooks/useNotice';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '../types';
import AutoAd from '@/app/_components/adsense/AutoAd';

const HomeMainContent = () => {
  const {
    data: noticeData,
    isLoading: noticeLoading,
    error: noticeError,
  } = useNotice<NoticeDataType>('notice');

  const {
    data: noticePatchData,
    isLoading: noticePatchLoading,
    error: noticePatchError,
  } = useNotice<NoticePatchDataType>('notice-patch');

  const {
    data: noticeEventData,
    isLoading: noticeEventLoading,
    error: noticeEventError,
  } = useNotice<NoticeEventDataType>('notice-event');

  return (
    <div className="dark flex flex-1 flex-col gap-2 p-2">
      <HomeTopImage />
      <div className="flex flex-col gap-2 md:flex-row">
        <RoundedContainer className="flex flex-1 truncate bg-muted/50">
          <BasicNotice
            eventType="basic"
            mainTitle="공지사항"
            isLoading={noticeLoading}
            isError={noticeError}
            items={noticeData?.notice || []}
            itemsPerPage={5}
          />
        </RoundedContainer>
        <RoundedContainer className="flex flex-1 truncate bg-muted/50">
          <BasicNotice
            eventType="basic"
            mainTitle="패치노트"
            isLoading={noticePatchLoading}
            isError={noticePatchError}
            items={noticePatchData?.patch_notice || []}
            itemsPerPage={5}
          />
        </RoundedContainer>
      </div>
      <div className="flex flex-col gap-2">
        <RoundedContainer className="flex bg-muted/50">
          <BasicNotice
            eventType="event"
            mainTitle="이벤트"
            isLoading={noticeEventLoading}
            isError={noticeEventError}
            items={noticeEventData?.event_notice || []}
            itemsPerPage={10}
          />
        </RoundedContainer>
        <div className="w-full">
          <AutoAd
            dataSlot="9712379035"
            className="h-32 w-80 sm:w-[500px] md:w-[700px] lg:w-[900px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMainContent;
