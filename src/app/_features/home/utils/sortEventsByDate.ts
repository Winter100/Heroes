import { BasicEventType } from '../types';

export const sortEventsByDate = (items: BasicEventType[]) => {
  return items?.slice().sort((a, b) => {
    const aStart = a.date_event_start
      ? new Date(a.date_event_start).getTime()
      : Infinity;
    const bStart = b.date_event_start
      ? new Date(b.date_event_start).getTime()
      : Infinity;

    const aEnd = a.date_event_end
      ? new Date(a.date_event_end).getTime()
      : Infinity;
    const bEnd = b.date_event_end
      ? new Date(b.date_event_end).getTime()
      : Infinity;
    if (aEnd !== bEnd) return aEnd - bEnd;
    return aStart - bStart;
  });
};
