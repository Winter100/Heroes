"use client";

import { CachItemsType } from "@/app/_type/equipmentType";
import ItemImage from "../iteminfo/info/ItemImage";
import CachColors from "./CachColors";

const avatarSlot = [
  [null, "Avatar_Helm", "Avatar_Rear"],
  ["Avatar_Weapon", "Avatar_Tunic", null],
  // ["Avatar_Weapon", "Avatar_Tunic", "(Unknown)"],
  [null, "Avatar_Pants", "Avatar_Gloves"],
  ["Avatar_Tail", "Avatar_Boots", null],
];

const cachSlot = [
  ["Right Epaulet", "Hair", "Left Epaulet"],
  ["FacePainting", "Lens", "Scar"],
  ["Inner Armor", "MakeUp", null],
  ["Body Shape", "BodyPainting", "Badge"],
];

const CachGrid = ({
  items,
  filterValue,
}: {
  items: CachItemsType[];
  filterValue: "아바타" | "캐쉬";
}) => {
  const slot = filterValue === "아바타" ? avatarSlot : cachSlot;
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
          (item) => item.item_equipment_slot_name === slot,
        );
        return (
          <li
            className="flex h-full w-full items-center justify-center"
            key={slot}
          >
            {item ? (
              <div className="flex h-full w-full flex-col items-center rounded-md border border-border">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-full w-full flex-col justify-center gap-1 p-2 px-1 hover:bg-muted/70">
                    <div className="flex w-full items-center gap-1">
                      <div className="hidden lg:block">
                        <ItemImage
                          materials={item.item_name}
                          slot={item.item_equipment_slot_name}
                        />
                      </div>
                      <div
                        className="truncate text-center text-xs"
                        title={item.item_name}
                      >
                        {item.item_name}
                      </div>
                    </div>
                    <CachColors
                      isWearing={!item.item_name.includes("미착용")}
                      colors={item.item_option.cash_item_color}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default CachGrid;
