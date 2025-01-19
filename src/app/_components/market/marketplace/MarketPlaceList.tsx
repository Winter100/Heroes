"use client";
import { useMarketRankList } from "@/app/_hooks/useMarketRankList/useMarketRankList";
import Column from "../../layout/Column";
import MarketPlaceItem from "./MarketPlaceItem";
import Loading from "../../common/Loading";

interface MarketPlaceListProps {
  type: "buy" | "sell";
}
const MarketPlaceList = ({ type = "buy" }: MarketPlaceListProps) => {
  const { data, isLoading } = useMarketRankList(type);

  if (isLoading) return <Loading />;

  if (!data) return null;

  const goldRankListData = "buy_gold" in data ? data.buy_gold : data.sell_gold;

  return (
    <Column className="flex flex-1 items-center rounded-md border border-zinc-500">
      <table className="w-full table-fixed">
        <thead className="h-9">
          <tr className="border-b-2 border-gray-500 text-[15px]">
            <th>순위</th>
            <th>카르제</th>
            <th>골드</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {goldRankListData.map((rank, i) => (
            <tr
              key={rank.cairde_name}
              className="h-8 font-sans text-sm font-light hover:bg-zinc-800"
            >
              <MarketPlaceItem {...rank} rank={i + 1} />
            </tr>
          ))}
        </tbody>
      </table>
    </Column>
  );
};

export default MarketPlaceList;
