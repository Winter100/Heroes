import { useMemo } from "react";
import { splitEnchantByType } from "@/app/_components/enchant/utils/splitEnchantByType";
import { useEnchantPriceList } from "../useEnchantPriceList/useEnchantPriceList";
import { keyword } from "@/app/_constant/keyword";
import { filteredEnchantData } from "@/app/_components/enchant/utils/filteredEnchantData";
import { transformedEnchantData } from "@/app/_components/enchant/utils/transformedEnchantData";
// import { dummy_enchnat } from "@/app/_constant/dummyEnchantList";

export const useEnchantTable = () => {
  const { data, isLoading } = useEnchantPriceList();
  // const isLoading = false;

  const { prefix, suffix } = useMemo(
    () => splitEnchantByType(data || []),
    [data],
  );

  const filteredPrefix = useMemo(
    () => filteredEnchantData(prefix, keyword.upgreadeType.prefix),
    [prefix],
  );

  const filteredSuffix = useMemo(
    () => filteredEnchantData(suffix, keyword.upgreadeType.suffix),
    [suffix],
  );

  const transformedPrefixData = useMemo(
    () => transformedEnchantData(filteredPrefix, keyword.upgreadeType.prefix),
    [filteredPrefix],
  );

  const transformedSuffixData = useMemo(
    () => transformedEnchantData(filteredSuffix, keyword.upgreadeType.suffix),
    [filteredSuffix],
  );

  const mergedEnchantPriceList = useMemo(
    () => [...transformedPrefixData, ...transformedSuffixData],
    [transformedPrefixData, transformedSuffixData],
  );

  return { mergedEnchantPriceList, isLoading };
};
