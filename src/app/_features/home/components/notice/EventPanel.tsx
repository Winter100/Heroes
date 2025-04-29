'use client';

import { NoticeEventDataType } from '../../types';
import { useNotice } from '../../hooks/useNotice';
import EventNotice from './event/EventNotice';
import { useEventNoticeDateStore } from '../../store/noticeEventStore';

const EventPanel = () => {
  const {
    data: noticeEventData,
    isLoading: noticeEventLoading,
    error: noticeEventError,
  } = useNotice<NoticeEventDataType>('notice-event');
  const eventDate = useEventNoticeDateStore((state) => state.eventDate);
  const setEventDate = useEventNoticeDateStore((state) => state.setEventDate);

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <EventNotice
        className="h-full w-full"
        mainTitle="이벤트"
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

export default EventPanel;
