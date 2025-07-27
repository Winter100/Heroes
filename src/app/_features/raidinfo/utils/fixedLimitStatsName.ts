import { limitCalculator } from '@/app/_utils/raid/limitCalculator';
import { LimitStatsFilterType } from '../types';

const FILTERED_STATS = [
  { user_stat_name: '공격력', user_stat_value: '0' },
  { user_stat_name: '크리티컬', user_stat_value: '0' },
  { user_stat_name: '밸런스', user_stat_value: '0' },
  { user_stat_name: '크리티컬 저항', user_stat_value: '0' },
  { user_stat_name: '대항력', user_stat_value: '0' },
];

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
