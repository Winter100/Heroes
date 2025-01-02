interface MarKetBuyRankList {
  cairde_name: string;
  buy_gold: number;
}

interface MarKetSellRankList {
  cairde_name: string;
  sell_gold: number;
}

type MarKetPlaceItemData = (MarKetBuyRankList | MarKetSellRankList) & {
  rank: number;
};

const MarketPlaceItem = (props: MarKetPlaceItemData) => {
  return (
    <>
      <th className="font-normal">{props?.rank}</th>
      <th className="font-normal">{props?.cairde_name}</th>
      <th className="font-normal">
        {"buy_gold" in props
          ? `${props?.buy_gold.toLocaleString()}`
          : `${props?.sell_gold.toLocaleString()}`}
      </th>
    </>
  );
};

export default MarketPlaceItem;
