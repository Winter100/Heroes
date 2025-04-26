'use client';

import { NewEquipmentType } from '@/app/_type/equipmentType';
import ItemImage from '../iteminfo/info/ItemImage';
import ItemTooltip from '../tooltip/ItemTooltip';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const itemSlot = [
  ['Earring', 'Head', 'Necklace'],
  ['Right Hand', 'Upper', 'Left Hand'],
  [null, 'Lower', 'Hand'],
  ['Belt', 'Leg', 'Charm'],
  ['Right Finger', 'Artifact', 'Left Finger'],
  ['Right Wrist', 'Rhod', 'Left Wrist'],
];
const EquipmentGrid = ({ items }: { items: NewEquipmentType[] }) => {
  return (
    <ul className="grid h-full min-h-[480px] w-full grid-cols-3 grid-rows-6 items-center justify-items-center gap-2">
      {/* <ul className="grid h-full w-full grid-cols-3 grid-rows-6 items-center justify-items-center gap-2"> */}
      {itemSlot.flat().map((slot, index) => {
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
                <Popover>
                  <PopoverTrigger className="h-full w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center hover:bg-muted/70">
                      <ItemImage
                        materials={item.item_name}
                        slot={item.item_equipment_slot_name}
                      />
                      <div className="text-center text-xs">
                        {item.item_name}
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="dark w-[350px] p-1">
                    <ItemTooltip
                      isItemInfo={true}
                      itemName={item.item_name}
                      {...item}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default EquipmentGrid;
