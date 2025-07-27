import { convertToKST } from '@/app/_utils/convert/convertToKST';
import { cn } from '@/lib/utils';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import {
  getRemainingTime,
  getYearMonthDay,
} from '@/app/_utils/preview/dateEvent';
import { BasicNoticeItemProps } from '../../types';
import { useEventNoticeDateStore } from '../../store/noticeEventStore';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const EventNoticeItem = ({
  isIn24,
  notice_id,
  title,
  url,
  date_event_start,
  date_event_end,
}: BasicNoticeItemProps) => {
  const { setEventDate, eventDate } = useEventNoticeDateStore();

  const time = getRemainingTime(date_event_end || '');
  const isWithinOneDays = time.includes('시간');
  const isSelected = eventDate?.notice_id === notice_id;

  return (
    <TableRow
      className={cn('cursor-pointer', isSelected && 'text-white')}
      onClick={() => {
        const newEvent = {
          notice_id: notice_id,
          start: date_event_start || '',
          end: date_event_end || '',
        };
        setEventDate(newEvent);
      }}
    >
      <TableCell>
        <div className="flex flex-row gap-2">
          <div className="pr-1 text-xs text-red-600">{isIn24 && 'N'}</div>
          <div className="">{title}</div>
        </div>
      </TableCell>
      <TableCell>
        {date_event_end ? (
          <div className="flex flex-wrap items-center justify-center gap-1">
            <div>{getYearMonthDay(convertToKST(date_event_start || ''))}</div>
            <div className="hidden sm:block">~</div>
            <div>
              {`${getYearMonthDay(convertToKST(date_event_end || ''))}`}
            </div>
          </div>
        ) : (
          <div
            className={cn(
              'flex items-center justify-center',
              isSelected && 'text-red-600'
            )}
          >
            상시 이벤트
          </div>
        )}
      </TableCell>
      <TableCell>
        {date_event_end ? (
          <div className="flex items-center justify-center">
            <Badge
              variant={isWithinOneDays ? 'destructive' : 'outline'}
              className={cn('', isWithinOneDays ? '' : 'text-inherit')}
            >
              {getRemainingTime(date_event_end || '')}
            </Badge>
          </div>
        ) : (
          <div className="flex items-center justify-center">상시</div>
        )}
      </TableCell>
      <TableCell>
        <div className="flex items-center justify-center">
          <Link href={url} target="_blank" className="hover:text-white md:px-2">
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 text-inherit"
            >
              <div className="hidden truncate md:block">이벤트 보기</div>
              <SquareArrowOutUpRight size={15} />
            </Badge>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default EventNoticeItem;
