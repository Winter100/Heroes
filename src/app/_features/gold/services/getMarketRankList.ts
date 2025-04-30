import axios from 'axios';
import { MarketRankList } from '../types';

export const getMarketRankList = async <T extends 'buy' | 'sell'>(
  type: 'buy' | 'sell'
) => {
  try {
    const response = await axios.get(`api/getMarketRankList?type=${type}`);

    const data = await response.data;

    return data as MarketRankList<T>;
  } catch (e) {
    throw e;
  }
};
