import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEnchantPrice } from "@/app/_services/getEnchantPrice";
import { useEnchantPriceStore } from "@/app/_store/enchantPriceStore";
import { EnchantPriceType } from "@/app/_type/enchantType";

export const useEnchantPriceList = () => {
  const { setEnchantPriceList, setEnchantPriceLoading } =
    useEnchantPriceStore();

  const { data, isLoading, isError } = useQuery<EnchantPriceType[]>({
    queryKey: ["enchantPriceList"],
    queryFn: () => getEnchantPrice(),
    staleTime: Infinity,
  });

  useEffect(() => {
    setEnchantPriceList(data ?? []);
  }, [setEnchantPriceList, data]);

  useEffect(() => {
    setEnchantPriceLoading(isLoading);
  }, [setEnchantPriceLoading, isLoading]);

  return { data, isLoading, isError };
};
