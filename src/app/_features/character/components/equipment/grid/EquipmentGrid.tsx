'use client';

import { NewEquipmentType } from '@/app/_type/equipmentType';
import { ITEM_SLOT } from '../../../constant';
import ItemPopover from './ItemPopover';

const EquipmentGrid = ({ items }: { items: NewEquipmentType[] }) => {
  return (
    <ul className="grid h-full min-h-[480px] w-full grid-cols-3 grid-rows-6 items-center justify-items-center gap-2">
      {ITEM_SLOT.flat().map((slot, index) => {
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
            {item ? (
              <div className="flex h-full w-full flex-col items-center rounded-md border border-border">
                <ItemPopover {...item} />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default EquipmentGrid;
