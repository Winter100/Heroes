import React from 'react';
import BasicNoticeItem from './BasicNoticeItem';
import EventNoticeItem from './EventNoticeItem';
import { isWithinHours } from '@/app/_utils/get';
import { BasicEventType } from '@/app/_type/homeType';

interface NoticeItemRendererProps {
  item: BasicEventType;
  isBasicEvent: boolean;
}

const NoticeItemRenderer = ({
  item,
  isBasicEvent,
}: NoticeItemRendererProps) => {
  const date = item?.date ? item?.date : item?.date_event_start;
  const is24InHours = isWithinHours(date || '', 24);

  const NoticeComponent = isBasicEvent ? BasicNoticeItem : EventNoticeItem;

  return (
    <NoticeComponent key={item.notice_id} isIn24={is24InHours} {...item} />
  );
};

export default NoticeItemRenderer;
