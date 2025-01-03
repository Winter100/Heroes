import { useQuery } from "@tanstack/react-query";
import { getEnchantPrice } from "@/app/_services/getEnchantPrice";
import { EnchantPriceType } from "@/app/_type/enchantPriceType";

export const useEnchant = (name: string) => {
  const { data, isLoading } = useQuery<EnchantPriceType[]>({
    enabled: !!name,
    queryKey: ["enchant"],
    queryFn: () => getEnchantPrice(),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
