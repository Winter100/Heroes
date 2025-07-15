'use client';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import HomeTopImage from './top/HomeTopImage';
import BasicNotice from './notice/BasicNotice';
import EventCalendar from './calendar/EventCalendar';
import { useNotice } from '../hooks/useNotice';
import { useEventNoticeDateStore } from '../store/noticeEventStore';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '../types';

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

  const { eventDate } = useEventNoticeDateStore();

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
        <RoundedContainer className="flex flex-1 bg-muted/50">
          <BasicNotice
            eventType="event"
            mainTitle="이벤트"
            isLoading={noticeEventLoading}
            isError={noticeEventError}
            items={noticeEventData?.event_notice || []}
            itemsPerPage={8}
          />
        </RoundedContainer>
        <RoundedContainer className="flex flex-1 truncate bg-muted/50">
          <EventCalendar eventDate={eventDate} />
        </RoundedContainer>
      </div>
    </div>
  );
};

export default HomeMainContent;
