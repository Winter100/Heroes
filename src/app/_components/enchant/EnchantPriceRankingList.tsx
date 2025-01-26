"use client";
import { filterUniqueStatObjects } from "./utils/filterUniqueStatObjects";
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from "@/app/_constant/enchant";
import { keyword } from "@/app/_constant/keyword";
import { getEnchantAvgPrice } from "./utils/getEnchantAvgPrice";
import EnchantRankTable from "./EnchantRankTable";
import { useState } from "react";
import EnchantDetailItem from "./EnchantDetailItem";
import Column from "../layout/Column";

import BasicContainer from "../layout/BasicContainer";
import EnchantDropList from "./EnchantDropList";
import { useEnchantPriceStore } from "@/app/_store/enchantPriceStore";
import Loading from "../common/Loading";

export interface EnchantData {
  upgreadeType: string;
  price: number;
  ranking: number;
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
  const [selectItem, setSelectItem] = useState<EnchantData | null>(null);
  const [inputValue, setInputValue] = useState("");

  const prefix = useEnchantPriceStore((state) => state.prefix);
  const suffix = useEnchantPriceStore((state) => state.suffix);
  const enchantPriceLoading = useEnchantPriceStore(
    (state) => state.enchantPriceLoading,
  );

  // const { prefix, suffix } = splitEnchantByType(dummy_enchnat);
  const handleClick = (enchant: EnchantData) => {
    setSelectItem(enchant);
  };
  const prefixEnchantTitleList = filterUniqueStatObjects(
    prefix_enchant_options,
  );
  const suffixEnchantTitleList = filterUniqueStatObjects(
    suffix_enchant_options,
  );

  const prefixEnchantPreiceAvg = prefixEnchantTitleList.map((enchant) => {
    return {
      ...enchant,
      upgreadeType: keyword.upgreadeType.prefix,
      price:
        getEnchantAvgPrice({
          upgreadeType: keyword.upgreadeType.prefix,

          enchantPriceList: prefix,
          enchantName: enchant.name,
        }) || 0,
    };
  });

  const suffixEnchantPreiceAvg = suffixEnchantTitleList.map((enchant) => {
    return {
      ...enchant,
      upgreadeType: keyword.upgreadeType.suffix,
      price:
        getEnchantAvgPrice({
          upgreadeType: keyword.upgreadeType.suffix,

          enchantPriceList: suffix,
          enchantName: enchant.name,
        }) || 0,
    };
  });

  const mergedEnchantList = [
    ...prefixEnchantPreiceAvg,
    ...suffixEnchantPreiceAvg,
  ]
    .sort((a, b) => (b.price || 0) - (a.price || 0))
    .map((enchant, i) => {
      return {
        ...enchant,
        ranking: i + 1,
      };
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const filteredEnchantData = mergedEnchantList.filter((item) =>
    item.name
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(inputValue.replace(/\s+/g, "").toLowerCase()),
  );

  if (enchantPriceLoading) {
    return (
      <div className="h-96">
        <Loading size="10" />
      </div>
    );
  }
  return (
    <BasicContainer className="mt-4 md:mt-20">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center gap-5 rounded-md border border-borderColor p-2 md:max-w-5xl md:flex-row md:p-10">
        <Column className="z-10 max-w-md border-borderColor">
          <div className="fixed-scrollbar h-96 overflow-x-hidden overflow-y-scroll md:h-[730px]">
            <EnchantRankTable
              handleClick={handleClick}
              selectedEnchant={selectItem?.name ?? ""}
              enchantData={filteredEnchantData}
            />
          </div>
          <div className="mt-1 flex h-8 items-center justify-center rounded-md border border-borderColor p-1 text-xs text-white">
            <input
              className="w-full border-none bg-inherit px-2 outline-none"
              onChange={handleInputChange}
              placeholder="인챈트를 입력해주세요."
            />
          </div>
        </Column>
        <Column className="w-full max-w-md gap-2">
          {selectItem && (
            <>
              <EnchantDropList enchantData={selectItem} />
              <EnchantDetailItem {...selectItem} />
            </>
          )}
        </Column>
      </div>
    </BasicContainer>
  );
};

export default EnchantPriceRankingList;
