import { getMarketRankList } from "@/app/_services/getMarketRankList";
import { useQuery } from "@tanstack/react-query";

export const useMarketRankList = (type: "buy" | "sell") => {
  return useQuery({
    queryKey: [type],
    queryFn: () => getMarketRankList(type),
    refetchOnMount: false,
  });
};
