import React, { memo } from "react";
import Column from "../layout/Column";
import Image from "next/image";
import { getImageByName } from "@/app/_utils/getImageByName";
import { EnchantData } from "./EnchantPriceRankingList";

interface EnchantDropListProps {
  enchantData: EnchantData;
}

const EnchantDropList = ({ enchantData }: EnchantDropListProps) => {
  if (enchantData.drop_item_list?.length === 0 || !enchantData.drop_item_list) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-md border border-borderColor p-2 font-sans text-sm font-light text-white">
        추가 예정
      </div>
    );
  }

  return (
    <Column className="h-full w-full flex-1 rounded-md border border-borderColor p-2">
      <ul className="grid w-full grid-cols-3 gap-1 text-sm text-white">
        {enchantData?.drop_item_list?.sort().map((name) => (
          <li
            className="flex flex-col items-center justify-center rounded-md border-borderColor"
            key={name}
          >
            <div className="flex h-20 items-center justify-center">
              <Image
                width={70}
                height={70}
                style={{
                  objectFit: "scale-down",
                }}
                quality={100}
                title={name}
                src={getImageByName(name)}
                alt={name}
              />
            </div>

            <span className="w-24 flex-shrink-0 px-2 text-center text-xs">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </Column>
  );
};

const arePropsEqual = (
  prevProps: EnchantDropListProps,
  nextProps: EnchantDropListProps,
) => {
  return (
    JSON.stringify(prevProps.enchantData.drop_item_list) ===
    JSON.stringify(nextProps.enchantData.drop_item_list)
  );
};

export default memo(EnchantDropList, arePropsEqual);
