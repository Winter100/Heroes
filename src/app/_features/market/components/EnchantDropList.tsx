import { memo } from 'react';
import Image from 'next/image';
import { getImageByName } from '@/app/_utils/getImageByName';
import { EnchantStoreType } from '@/app/_store/selectEnchantStore';
import clsx from 'clsx';
import Column from '@/app/_components/layout/Column';
import { useEnchantFilterStore } from '../store/enchantFilterStore';

const EnchantDropList = ({
  enchantData,
}: {
  enchantData: EnchantStoreType;
}) => {
  const { dropRaidOrItemName, setDropRaidOrItemName } = useEnchantFilterStore(
    (state) => ({
      dropRaidOrItemName: state.dropRaidOrItemName,
      setDropRaidOrItemName: state.setDropRaidOrItemName,
    })
  );

  if (enchantData.drop_item_list?.length === 0 || !enchantData.drop_item_list) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-md border border-borderColor/50 p-2 font-sans text-sm font-light text-white">
        추가 예정
      </div>
    );
  }

  return (
    <Column className="flex-1 rounded-md border border-borderColor/50 p-1">
      <ul className="grid w-full grid-cols-3 gap-1 text-sm text-white">
        {enchantData.drop_item_list?.sort().map((name) => (
          <li
            onClick={() => setDropRaidOrItemName(name)}
            className={clsx(
              'flex cursor-pointer flex-col items-center justify-center rounded-md hover:animate-boundUpDown',
              dropRaidOrItemName === name
                ? 'rounded-md border border-blue-300 text-blue-300'
                : 'hover:outline hover:outline-1 hover:outline-rose-300'
            )}
            key={name}
          >
            <div className="flex h-20 items-center justify-center">
              <Image
                width={60}
                height={60}
                className="object-scale-down"
                title={name}
                src={getImageByName(name)}
                alt={name}
              />
            </div>

            <span className="flex-shrink-0 px-1 text-center text-xs">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </Column>
  );
};

const arePropsEqual = (
  prevProps: { enchantData: EnchantStoreType },
  nextProps: { enchantData: EnchantStoreType }
) => {
  return (
    JSON.stringify(prevProps.enchantData.drop_item_list) ===
    JSON.stringify(nextProps.enchantData.drop_item_list)
  );
};

export default memo(EnchantDropList, arePropsEqual);
