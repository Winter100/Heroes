import React, { memo } from "react";
import Column from "../layout/Column";
import Image from "next/image";
import { getImageByName } from "@/app/_utils/getImageByName";
import { EnchantStoreType } from "@/app/_store/selectEnchantStore";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

interface EnchantDropList {
  enchantData: EnchantStoreType;
}

const EnchantDropList = ({ enchantData }: EnchantDropList) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterValue = searchParams.get("filter");

  const handleSearchParams = (name: string) => {
    if (filterValue === name) {
      router.push(`/market/enchant?filter=${"all"}`);
    } else {
      router.push(`/market/enchant?filter=${name}`);
    }
  };

  if (enchantData.drop_item_list?.length === 0 || !enchantData.drop_item_list) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-md border border-borderColor p-2 font-sans text-sm font-light text-white">
        추가 예정
      </div>
    );
  }

  return (
    <Column className="flex-1 rounded-md border border-borderColor p-2">
      <ul className="grid h-full w-full grid-cols-3 gap-1 text-sm text-white">
        {enchantData.drop_item_list?.sort().map((name) => (
          <li
            onClick={() => handleSearchParams(name)}
            className={clsx(
              "flex cursor-pointer flex-col items-center justify-center rounded-md hover:animate-boundUpDown hover:text-blue-300",
              filterValue === name && "rounded-md border border-blue-300",
            )}
            key={name}
          >
            <div className={clsx("flex h-20 items-center justify-center")}>
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

            <span className="flex-shrink-0 px-2 text-center text-xs">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </Column>
  );
};

const arePropsEqual = (
  prevProps: EnchantDropList,
  nextProps: EnchantDropList,
) => {
  return (
    JSON.stringify(prevProps.enchantData.drop_item_list) ===
    JSON.stringify(nextProps.enchantData.drop_item_list)
  );
};

export default memo(EnchantDropList, arePropsEqual);
