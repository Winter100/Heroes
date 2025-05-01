'use client';

import CachItem from './CachItem';
import { CachItemsType } from '@/app/_type/equipmentType';
import { AVATAR_SLOT, CACH_SLOT } from '../../../constant';

const CachGrid = ({
  items,
  filterValue,
}: {
  items: CachItemsType[];
  filterValue: '아바타' | '캐쉬';
}) => {
  const slot = filterValue === '아바타' ? AVATAR_SLOT : CACH_SLOT;
  return (
    <ul className="grid h-full w-full grid-cols-3 grid-rows-4 items-center justify-items-center gap-2">
      {slot.flat().map((slot, index) => {
        if (!slot)
          return (
            <div
              key={index}
              className="flex h-full w-full items-center justify-center"
            >
              {null}
            </div>
          );

        const item = items.find(
          (item) => item.item_equipment_slot_name === slot
        );
        return (
          <li
            className="flex h-full w-full items-center justify-center"
            key={slot}
          >
            {item ? <CachItem {...item} /> : null}
          </li>
        );
      })}
    </ul>
  );
};

export default CachGrid;
