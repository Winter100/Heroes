import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import { cn } from '@/lib/utils';

interface EnchantDropListProps {
  dropList: string[];
  setDropRaidOrItemName: (enchantName: string) => void;
  dropRaidOrItemName: string;
}
const EnchantDropList = ({
  dropList,
  setDropRaidOrItemName,
  dropRaidOrItemName,
}: EnchantDropListProps) => {
  if (dropList?.length === 0 || !dropList) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-md border border-muted p-2 font-sans text-sm font-light text-white">
        추가 예정
      </div>
    );
  }

  return (
    <ul className="grid h-full max-h-56 w-full flex-1 grid-cols-3 gap-1 overflow-y-auto rounded-md border border-muted p-1 text-sm text-white">
      {dropList?.sort().map((name: string) => (
        <li
          onClick={() => setDropRaidOrItemName(name)}
          className={cn(
            'flex cursor-pointer flex-col items-center justify-center rounded-md hover:animate-boundUpDown',
            dropRaidOrItemName === name
              ? 'rounded-md border border-blue-300 text-blue-300'
              : 'hover:outline hover:outline-1 hover:outline-rose-300'
          )}
          key={name}
        >
          <ImageIcon
            className="h-10 w-10"
            src={getImageByName(name)}
            alt={name}
          />
          <span className="flex-shrink-0 px-1 text-center text-xs">{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default EnchantDropList;
