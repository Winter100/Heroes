"use client";
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from "@/app/_constant/enchant";
import { keyword } from "@/app/_constant/keyword";
import EnchantRankTable from "./EnchantRankTable";
import Column from "../layout/Column";

import BasicContainer from "../layout/BasicContainer";
import { insertUpgradeType } from "./utils/insertUpgradeType";
import { useSelectEnchantStore } from "@/app/_store/selectEnchantStore";
import EnchantDropList from "./EnchantDropList";
import EnchantDetailItem from "./EnchantDetailItem";

export interface EnchantData {
  upgreadeType: string;
  date: string;
  price: {
    avgPrice: number;
    minPrice: number;
    maxPrice: number;
  };
  rank: string;
  name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  drop_item_list?: string[];
}

const EnchantPriceRankingList = () => {
  const enchant = useSelectEnchantStore((state) => state.enchant);
  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  return (
    <BasicContainer className="mt-4 md:mt-20">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center gap-3 rounded-md border border-borderColor p-2 md:max-w-5xl md:flex-row md:p-6 lg:p-10">
        <Column className="z-10 max-w-md border-borderColor">
          <div className="fixed-scrollbar h-96 overflow-x-hidden overflow-y-scroll md:h-[770px]">
            <EnchantRankTable enchantData={allEnchantList} />
          </div>
          {/* <div className="mt-1 flex h-8 items-center justify-center rounded-md border border-borderColor p-1 text-xs text-white">
            <input
              className="w-full border-none bg-inherit px-2 outline-none"
              onChange={handleInputChange}
              placeholder="인챈트를 입력해주세요."
            />
          </div> */}
        </Column>
        <Column className="w-full max-w-md gap-2">
          {enchant && (
            <>
              <EnchantDropList enchantData={enchant as any} />
              <EnchantDetailItem {...(enchant as any)} />
            </>
          )}
        </Column>
      </div>
    </BasicContainer>
  );
};

export default EnchantPriceRankingList;
