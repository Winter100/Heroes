'use client';

import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import { useUserEquipment, usePreviewAllData } from '@/app/_hooks';
import { EnchantGroupByAffix } from '@/app/_type/enchantType';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { cn } from '@/lib/utils';
import EquipmentItemContainer from './equipment-item-container';
import { ITEM_SLOT } from '@/app/_constant/character/item-slot-name';

const CharacterEquipment = ({
  ocid,
  enchants,
  equipment,
  onClick,
}: {
  ocid: string;
  enchants: EnchantGroupByAffix;
  equipment: NewEquipmentType | null;
  onClick: (item: NewEquipmentType) => void;
}) => {
  const { grindOption } = usePreviewAllData();
  const { isLoading, error, data } = useUserEquipment(
    ocid,
    grindOption.data ?? []
  );

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="flex h-full items-center justify-center">
        <ErrorApi />
      </div>
    );

  const bagItems =
    data?.item_equipment?.filter((i) => i.item_equipment_page === 'Bag') ?? [];

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

        const item = bagItems.find(
          (item) => item.item_equipment_slot_name === slot
        );
        return (
          <li
            className="flex h-full min-h-20 w-full items-center justify-center"
            key={slot}
          >
            {item ? (
              <button
                className={cn(
                  'h-full w-full rounded-md border border-border p-2 hover:bg-card',
                  equipment?.item_equipment_slot_name ===
                    item.item_equipment_slot_name && 'border-blue-300'
                )}
                onClick={() => onClick(item)}
              >
                <EquipmentItemContainer item={item} enchants={enchants} />
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterEquipment;
