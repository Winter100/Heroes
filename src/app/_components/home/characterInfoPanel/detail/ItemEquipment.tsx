"use client";

import { useEffect, useState } from "react";

import Loading from "@/app/_components/common/Loading";
import Column from "@/app/_components/layout/Column";
import { EquipmentType } from "@/app/_type/equipmentType";

import ItemDetailInfo from "./ItemDetailInfo";

const ItemEquipment = ({
  isLoading,
  items,
}: {
  isLoading: boolean;
  items: EquipmentType[];
}) => {
  const [item, setItem] = useState<EquipmentType | null>(null);

  useEffect(() => {
    setItem(null);
  }, [items]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-white">
        <Loading width="10" height="10" />
      </div>
    );
  }

  return (
    <Column className="h-full w-full rounded-lg p-2 text-white">
      {!item && (
        <ul className="grid h-full grid-cols-2 gap-1">
          {items.map((item) => (
            <li
              key={item.item_equipment_slot_name}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-gray-600 hover:text-blue-300"
            >
              <button
                onClick={() => setItem(item)}
                className="flex h-full w-full items-center justify-center gap-1"
              >
                <p>{item.item_option.enhancement_level}</p>
                <p>{item.item_option.prefix_enchant_preset_1}</p>
                <p>{item.item_option.suffix_enchant_preset_1}</p>
                <p>{item.item_name}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
      {item && <ItemDetailInfo item={item} setItem={setItem} />}
    </Column>
  );
};

export default ItemEquipment;
