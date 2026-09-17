'use client';

import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import BasicNotice from './notice/BasicNotice';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import { useNotice } from '@/app/_hooks/get/useNotice';
import Loading from '@/app/_components/common/Loading';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '@/app/_type/homeType';

const HomeMainContent = () => {
  const { isLoading, isError, data } = useNotice();

  return (
    <div className="flex flex-1 flex-col gap-2 p-2">
      <div className="flex min-h-60 flex-col gap-2 md:flex-row">
        <RoundedContainer className="flex flex-1 justify-center truncate bg-muted/50">
          {getNoticeComponent('공지사항', isLoading, isError, {
            notice: data?.notice,
          })}
        </RoundedContainer>
        <RoundedContainer className="flex flex-1 justify-center truncate bg-muted/50">
          {getNoticeComponent('패치노트', isLoading, isError, {
            patchNotice: data?.patchNotice,
          })}
        </RoundedContainer>
      </div>
      <div className="flex min-h-60 flex-col gap-2">
        <RoundedContainer className="flex flex-1 justify-center truncate bg-muted/50">
          {getNoticeComponent('이벤트', isLoading, isError, {
            eventNotice: data?.eventNotice,
          })}
        </RoundedContainer>
      </div>
    </div>
  );
};

export default HomeMainContent;

const getNoticeComponent = (
  title: string,
  isLoading: boolean,
  isError: boolean,
  {
    notice,
    patchNotice,
    eventNotice,
  }: {
    notice?: NoticeDataType['notice'];
    patchNotice?: NoticePatchDataType['patch_notice'];
    eventNotice?: NoticeEventDataType['event_notice'];
  }
): React.ReactNode => {
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <ErrorApi />;

  switch (title) {
    case '공지사항':
      return (
        <BasicNotice
          eventType="basic"
          mainTitle="공지사항"
          items={notice ?? []}
          itemsPerPage={5}
        />
      );
    case '패치노트':
      return (
        <BasicNotice
          eventType="basic"
          mainTitle="패치노트"
          items={patchNotice ?? []}
          itemsPerPage={5}
        />
      );
    case '이벤트':
      return (
        <BasicNotice
          eventType="event"
          mainTitle="이벤트"
          items={eventNotice ?? []}
          itemsPerPage={10}
        />
      );

    default:
      return (
        <ErrorApi>
          <p>알 수 없는 오류가 발생했습니다</p>
        </ErrorApi>
      );
  }
};
