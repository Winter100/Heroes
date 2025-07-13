import Link from 'next/link';
import { getTimeDifference } from '@/app/_components/preview/utils/dateEvent';
import { convertToKST } from '@/app/_utils/convertToKST';
import { BasicNoticeItemProps } from '../../types';

const BasicNoticeItem = ({
  isIn24,
  title,
  url,
  date,
}: BasicNoticeItemProps) => {
  return (
    <li>
      <Link
        className="block w-full"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        <div
          title={title}
          className="rounded-md bg-backgroundOne p-2 outline-1 outline-borderColor/50 hover:outline"
        >
          <div className="flex flex-1 items-center gap-2">
            {isIn24 && (
              <div className="text-center text-xs text-red-600">N</div>
            )}
            <div className="truncate">{title}</div>
            <div className="text-xs text-red-600">
              {getTimeDifference(convertToKST(date || ''))}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BasicNoticeItem;
