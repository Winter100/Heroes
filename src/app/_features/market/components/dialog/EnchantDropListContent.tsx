import Image from 'next/image';
import clsx from 'clsx';
import { getImageByName } from '@/app/_utils/getImageByName';
import { useSelectEnchantStore } from '@/app/_store/selectEnchantStore';
import { useEnchantFilterStore } from '../../store/enchantFilterStore';
import { DialogClose } from '@/components/ui/dialog';
import { getDropList } from '../../utils/getDropList';

const EnchantDropListContent = () => {
  const { dropRaidOrItemName, setDropRaidOrItemName } = useEnchantFilterStore(
    (state) => ({
      dropRaidOrItemName: state.dropRaidOrItemName,
      setDropRaidOrItemName: state.setDropRaidOrItemName,
    })
  );
  const { resetSelectEnchant } = useSelectEnchantStore((state) => ({
    resetSelectEnchant: state.resetSelectEnchant,
  }));

  const handleSearchParams = (name: string) => {
    setDropRaidOrItemName(name);
    resetSelectEnchant();
  };

  const dropList = getDropList();

  return (
    <ul className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-auto-150-fill">
      {dropList?.map((name) => (
        <li
          key={name}
          className={clsx(
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
            <div className="flex h-20 items-center justify-center">
              <Image
                title={name}
                width={80}
                height={80}
                className="object-scale-down"
                src={getImageByName(name)}
                alt={name}
              />
            </div>
            <span className="flex h-10 w-full items-center justify-center text-sm">
              {name}
            </span>
          </DialogClose>
        </li>
      ))}
    </ul>
  );
};

export default EnchantDropListContent;
