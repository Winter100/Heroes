import { EnchantGroup, Items } from '../types';

export const groupByRank = (data: Items[]): EnchantGroup[] => {
  const rankMap = new Map();

  data.forEach((item) => {
    const rank = item.rank;

    if (!rankMap.has(rank)) {
      rankMap.set(rank, []);
    }

    rankMap.get(rank).push(item);
  });

  return Array.from(rankMap, ([rank, items]) => {
    const strRank = rank.toString();
    return {
      rank: strRank,
      items,
    };
  });
};
