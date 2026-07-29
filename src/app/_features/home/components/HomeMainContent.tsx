'use client';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import BasicNotice from './notice/BasicNotice';
import {
  NoticeDataType,
  NoticePatchDataType,
  NoticeEventDataType,
} from '@/app/_type/homeType';
import ErrorApi from '@/app/_components/common/error/ErrorApi';

type Props = {
  notice: NoticeDataType;
  patchNotice: NoticePatchDataType;
  eventNotice: NoticeEventDataType;
};
const HomeMainContent = ({ notice, patchNotice, eventNotice }: Props) => {
  const noticeItem = notice.notice;
  const patchItem = patchNotice.patch_notice;
  const eventItem = eventNotice.event_notice;
  return (
    <div className="flex flex-1 flex-col gap-2 p-2">
      <div
        className="relative h-60 w-full rounded-md bg-cover"
        style={{
          backgroundImage: 'url(/art.jpg)',
          backgroundPosition: 'center 12%',
        }}
      />
      <div className="flex flex-col gap-2 md:flex-row">
        <RoundedContainer className="bg- flex flex-1 truncate bg-muted/50">
          {noticeItem.length > 0 ? (
            <BasicNotice
              eventType="basic"
              mainTitle="공지사항"
              items={noticeItem}
              itemsPerPage={5}
            />
          ) : (
            <ErrorApi />
          )}
        </RoundedContainer>
        <RoundedContainer className="flex flex-1 truncate bg-muted/50">
          {patchItem.length > 0 ? (
            <BasicNotice
              eventType="basic"
              mainTitle="패치노트"
              items={patchItem}
              itemsPerPage={5}
            />
          ) : (
            <ErrorApi />
          )}
        </RoundedContainer>
      </div>
      <div className="flex flex-col gap-2">
        <RoundedContainer className="flex flex-1 bg-muted/50">
          {eventItem.length > 0 ? (
            <BasicNotice
              eventType="event"
              mainTitle="이벤트"
              items={eventItem}
              itemsPerPage={10}
            />
          ) : (
            <ErrorApi />
          )}
        </RoundedContainer>
      </div>
    </div>
  );
};

export default HomeMainContent;
