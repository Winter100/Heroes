import { convertToKST } from '@/app/_utils/convert/convertToKST';
import { cn } from '@/lib/utils';
import { Calendar, Clock, SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import {
  getRemainingTime,
  getYearMonthDay,
} from '@/app/_utils/preview/dateEvent';
import { BasicNoticeItemProps } from '../../types';
import { useEventNoticeDateStore } from '../../store/noticeEventStore';

const EventNoticeItem = ({
  isIn24,
  notice_id,
  title,
  url,
  date_event_end,
  date_event_start,
}: BasicNoticeItemProps) => {
  const { setEventDate, eventDate } = useEventNoticeDateStore();

  const isSelected = eventDate?.notice_id === notice_id;

  return (
    <li
      key={notice_id}
      className="flex w-full min-w-0 flex-col gap-2 rounded-md bg-backgroundOne p-4 hover:animate-boundUpDown hover:cursor-pointer"
      onClick={() => {
        const newEvent = {
          notice_id: notice_id,
          start: date_event_start || '',
          end: date_event_end || '',
        };
        setEventDate(newEvent);
      }}
    >
      <div className="h-full w-full">
        <div title={title} className="h-full">
          <div className="flex h-full flex-col gap-1">
            <div className="pb-1">
              <div className="flex items-center">
                <div className="pr-1 text-xs text-red-600">{isIn24 && 'N'}</div>

                <div className="truncate text-base font-semibold text-white">
                  {title}
                </div>
              </div>
            </div>

            <>
              <div className="flex min-h-5 w-full items-center gap-2">
                <div className="flex items-center">
                  <Calendar size={15} />
                </div>
                <div
                  className={cn(
                    'flex flex-wrap items-center gap-1',
                    isSelected && 'text-red-600'
                  )}
                >
                  {date_event_end ? (
                    <div className="flex flex-wrap items-center gap-1">
                      <div>
                        {getYearMonthDay(convertToKST(date_event_start || ''))}
                      </div>
                      <div>~</div>
                      <div>
                        {`${getYearMonthDay(convertToKST(date_event_end || ''))}`}
                      </div>
                    </div>
                  ) : (
                    <div className={cn('', isSelected && 'text-red-600')}>
                      상시 이벤트
                    </div>
                  )}
                </div>
              </div>

              <div className="flex w-full items-center gap-2">
                <div className="flex items-center">
                  <Clock size={15} />
                </div>
                {date_event_end ? (
                  <div className="flex flex-wrap items-center gap-1">
                    <div className="hidden sm:block">종료까지</div>
                    <div
                      className={cn('text-wrap', isSelected && 'text-red-600')}
                    >
                      {`${getRemainingTime(date_event_end || '')}`}
                    </div>
                    <div>남음</div>
                  </div>
                ) : (
                  <div>상시</div>
                )}
              </div>
            </>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Link
          href={url}
          target="_blank"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 p-1.5 text-xs outline outline-1 outline-zinc-700/50 hover:bg-zinc-900/10"
        >
          <SquareArrowOutUpRight size={15} />
          <div className="truncate">이벤트 페이지로 이동</div>
        </Link>
      </div>
    </li>
  );
};

export default EventNoticeItem;
