import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import { DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface EnchantDropListContentProps {
  dropList: string[];
  dropRaidOrItemName: string;
  handleSearchParams: (name: string) => void;
}

const EnchantDropListContent = ({
  dropList,
  dropRaidOrItemName,
  handleSearchParams,
}: EnchantDropListContentProps) => {
  return (
    <ul className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-auto-150-fill">
      {dropList?.map((name) => (
        <li
          key={name}
          className={cn(
            'rounded-md bg-background opacity-70 hover:animate-boundUpDown hover:text-white hover:opacity-100',
            dropRaidOrItemName === name
              ? 'border border-blue-300 text-blue-300 !opacity-100'
              : 'hover:outline hover:outline-1 hover:outline-rose-300'
          )}
        >
          <DialogClose
            onClick={() => handleSearchParams(name)}
            className="flex w-full flex-col items-center justify-center p-1"
          >
            <div title={name}>
              <ImageIcon
                className="h-10 w-10"
                src={getImageByName(name)}
                alt={name}
              />
            </div>
            <span className="flex h-10 w-full items-center justify-center text-xs">
              {name}
            </span>
          </DialogClose>
        </li>
      ))}
    </ul>
  );
};

export default EnchantDropListContent;
