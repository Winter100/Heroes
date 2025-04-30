export interface MarketPlaceListProps {
  type: 'buy' | 'sell';
}

export type MarketRankList<T> = T extends 'buy'
  ? MarKetBuyRankList
  : MarKetSellRankList;

export interface MarKetBuyRankList {
  buy_gold: {
    cairde_name: string;
    buy_gold: number;
  }[];
}

export interface MarKetSellRankList {
  sell_gold: {
    cairde_name: string;
    sell_gold: number;
  }[];
}
