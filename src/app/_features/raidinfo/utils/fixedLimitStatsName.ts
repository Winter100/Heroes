import { limitCalculator } from '@/app/_components/raid/utils/limitCalculator';
import { FILTERED_STATS } from '../constant/filteredStats';
import { LimitStatsFilterType } from '../types';

export const fixedLimitStatsName = ({
  name,
  entry,
  limit,
  drop_items,
  bonus,
}: LimitStatsFilterType) => {
  return FILTERED_STATS.map((d) => {
    return {
      stat_name: d.user_stat_name,
      stat_value: Math.abs(
        Number(
          limitCalculator(
            { name, entry, limit, drop_items, bonus },
            '상한',
            d.user_stat_name,
            d.user_stat_value,
            '0'
          )
        )
      ),
    };
  });
};
