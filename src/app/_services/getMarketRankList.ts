import axios from "axios";
import { MarKetBuyRankList, MarKetSellRankList } from "../_type/marketRankList";

type MarketRankList<T> = T extends "buy"
  ? MarKetBuyRankList
  : MarKetSellRankList;

export const getMarketRankList = async <T extends "buy" | "sell">(
  type: "buy" | "sell",
) => {
  try {
    const response = await axios.get(`api/getMarketRankList?type=${type}`);

    const data = await response.data;

    return data as MarketRankList<T>;
  } catch (e) {
    throw e;
  }
};
