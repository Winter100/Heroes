import { create } from 'zustand';
import { EventDate } from '../types';
import { parseKoreanDate } from '@/app/_utils/preview/dateEvent';
import { convertToKST } from '@/app/_utils/convert/convertToKST';

type State = {
  eventDate: EventDate | null;
};

type Action = {
  setEventDate: (date: EventDate | null) => void;
};

export const useEventNoticeDateStore = create<State & Action>((set) => {
  return {
    eventDate: null,
    setEventDate: (eventDate) => {
      set((state) => {
        if (state.eventDate?.notice_id === eventDate?.notice_id) {
          return { eventDate: null };
        }
        if (!eventDate?.start || !eventDate?.end) {
          const newEventDate = {
            notice_id: eventDate?.notice_id || 0,
            start: null,
            end: null,
          };
          return { eventDate: newEventDate };
        }
        const startDate = parseKoreanDate(
          convertToKST(eventDate?.start || '')
        ).toString();
        const endDate = parseKoreanDate(
          convertToKST(eventDate?.end || '')
        ).toString();

        const newEventDate = {
          notice_id: eventDate?.notice_id || 0,
          start: startDate,
          end: endDate,
        };

        return { eventDate: newEventDate };
      });
    },
  };
});
