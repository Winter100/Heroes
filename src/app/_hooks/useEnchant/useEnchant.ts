import { useQuery } from "@tanstack/react-query";
import { getEnchantPrice } from "@/app/_services/getEnchantPrice";
import { EnchantPriceType } from "@/app/_type/enchantPriceType";

export const useEnchant = (name: string) => {
  const { data, isLoading } = useQuery<EnchantPriceType[]>({
    enabled: !!name,
    queryKey: [name, "enchant"],
    queryFn: () => getEnchantPrice(),
    gcTime: 1000 * 60 * 10,
    staleTime: 10 * 1000,
  });

  return { data, isLoading };
};
