import { splitEnchantByType } from "@/app/_components/enchant/utils/splitEnchantByType";
import { useEnchantPriceList } from "../useEnchantPriceList/useEnchantPriceList";
import { keyword } from "@/app/_constant/keyword";
import { filteredEnchantData } from "@/app/_components/enchant/utils/filteredEnchantData";
import { transformedEnchantData } from "@/app/_components/enchant/utils/transformedEnchantData";

export const useEnchantTable = () => {
  const { data, isLoading } = useEnchantPriceList();

  const { prefix, suffix } = splitEnchantByType(data || []);

  const filteredPrefix = filteredEnchantData(
    prefix,
    keyword.upgreadeType.prefix,
  );
  const filteredSuffix = filteredEnchantData(
    suffix,
    keyword.upgreadeType.suffix,
  );

  const transformedPrefixData = transformedEnchantData(
    filteredPrefix,
    keyword.upgreadeType.prefix,
  );
  const transformedSuffixData = transformedEnchantData(
    filteredSuffix,
    keyword.upgreadeType.suffix,
  );

  const mergedEnchantPriceList = [
    ...transformedPrefixData,
    ...transformedSuffixData,
  ];

  return { mergedEnchantPriceList, isLoading };
};
