import { enchantEffectOrderMap } from '@/app/_constant/keyword';
import { EnchantGroup, EnchantOptionType } from '@/app/_type/enchantType';
import { EnchantOptionSort } from '@/app/_utils/enchant';

export const groupByRank = (
  data: EnchantOptionType[],
  type: 'prefix' | 'suffix' | 'infusion' = 'infusion'
): EnchantGroup[] => {
  const rankMap = new Map();

  rankMap.set('all', []);

  const list = EnchantOptionSort(data, enchantEffectOrderMap, type);

  list.forEach((item) => {
    const rank = item.rank;

    if (!rankMap.has(rank)) {
      rankMap.set(rank, []);
    }

    rankMap.get('all').push(item);
    rankMap.get(rank).push(item);
  });

  return Array.from(rankMap, ([rank, enchants]) => {
    const strRank = rank.toString();
    return {
      title: rank === 'all' ? '전체' : `${strRank}`,
      rank: strRank,
      enchants,
    };
  });
};
