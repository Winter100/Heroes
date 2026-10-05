'use client';

import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import BasicNotice from './notice/BasicNotice';
import { useNotice } from '@/app/_hooks/get/useNotice';

const HomeMainContent = () => {
  const { data } = useNotice();

  return (
    <div className="flex flex-1 flex-col gap-2 p-2">
      <div className="flex min-h-60 flex-col gap-2 md:flex-row">
        <RoundedContainer className="flex flex-1 justify-center truncate bg-muted/50">
          <BasicNotice
            eventType="basic"
            mainTitle="공지사항"
            items={data.notice.notice}
            itemsPerPage={5}
          />
        </RoundedContainer>
        <RoundedContainer className="flex flex-1 justify-center truncate bg-muted/50">
          <BasicNotice
            eventType="basic"
            mainTitle="패치노트"
            items={data.patchNotice.patch_notice}
            itemsPerPage={5}
          />
        </RoundedContainer>
      </div>
      <div className="flex min-h-60 flex-col gap-2">
        <RoundedContainer className="flex flex-1 justify-center truncate bg-muted/50">
          <BasicNotice
            eventType="event"
            mainTitle="이벤트"
            items={data.eventNotice.event_notice}
            itemsPerPage={10}
          />
        </RoundedContainer>
      </div>
    </div>
  );
};

export default HomeMainContent;
