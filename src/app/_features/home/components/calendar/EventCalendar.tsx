'use client';

import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { EventDate } from '../../types';

const EventCalendar = ({ eventDate }: { eventDate: EventDate | null }) => {
  return (
    <div className="flex flex-1 items-center justify-center p-2">
      <Calendar
        showOutsideDays={false}
        numberOfMonths={2}
        mode="range"
        selected={{
          from: new Date(eventDate?.start || ''),
          to: new Date(eventDate?.end || ''),
        }}
        styles={{ cell: { minWidth: '32px' } }}
        locale={ko}
        formatters={{
          formatCaption: (date) => format(date, 'yyyy년 M월', { locale: ko }),
        }}
        modifiersStyles={{
          range_start: {
            backgroundColor: 'inherit',
            color: 'white',
          },
          range_middle: {},
          range_end: {
            backgroundColor: 'inherit',
            color: 'white',
          },
        }}
      />
    </div>
  );
};

export default EventCalendar;
