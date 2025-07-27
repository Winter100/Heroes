import { ComponentProps } from 'react';

export type BasicEventType = {
  title: string;
  url: string;
  notice_id: number;
  date?: string;
  date_event_start?: string;
  date_event_end?: string;
};

export type NoticeDataType = {
  notice: {
    title: string;
    url: string;
    notice_id: number;
    date: string;
  }[];
};
export type NoticePatchDataType = {
  patch_notice: {
    title: string;
    url: string;
    notice_id: number;
    date: string;
  }[];
};

export type NoticeEventDataType = {
  event_notice: {
    title: string;
    url: string;
    notice_id: 0;
    date_event_start: string;
    date_event_end: string;
    ongoing_flag: string;
  }[];
};

export interface BasicNoticeProps extends ComponentProps<'div'> {
  mainTitle: string;
  items: BasicEventType[];
  itemsPerPage?: number;
  isLoading: boolean;
  isError: Error | null;
  eventType: 'basic' | 'event';
}

export interface EventDate {
  notice_id: number;
  start: string | null;
  end: string | null;
}

export interface NoteListProps extends ComponentProps<'div'> {
  mainTitle: string;
  eventDate: EventDate | null;
  setEventDate: (date: EventDate | null) => void;
  items: BasicEventType[];
  itemsPerPage?: number;
  isLoading: boolean;
  isError: Error | null;
}

export interface BasicNoticeItemProps {
  notice_id: number;
  title: string;
  url: string;
  isIn24: boolean;
  date?: string;
  date_event_start?: string;
  date_event_end?: string;
}

export interface NoticePaginationProps {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  prevDisable: boolean;
  nextDisable: boolean;
  page: number;
  totalPages: number;
}
