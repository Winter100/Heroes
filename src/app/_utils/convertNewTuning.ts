import { NewEquipmentType } from '../_type/equipmentType';

export const convertNewTuning = (item: NewEquipmentType) => {
  return item.item_option.tuning_stat?.map((stat, _, arr) => {
    if (stat.stat_name === '해제') {
      if (item.item_name.includes('와드네')) {
        return {
          ...stat,
          isView: true,
        };
      } else {
        const allOtherStatsMatch =
          arr
            .filter((s) => s.stat_name !== '해제' && s.stat_name !== '해제 2')
            .every((s) => s.stat_max_value === s.stat_value) &&
          Number(item.item_option.enhancement_level) >= 13;
        return {
          ...stat,
          isView: allOtherStatsMatch,
        };
      }
    } else if (stat.stat_name === '해제 2') {
      const isLimitTrue = arr
        .filter((s) => s.stat_name !== '해제 2')
        .every((s) => s.stat_max_value === s.stat_value);
      return {
        ...stat,
        isView: isLimitTrue,
      };
    } else {
      return { ...stat, isView: true };
    }
  });
};

export const isLimit1Every = (
  stats:
    | {
        isView: boolean;
        stat_name: string;
        stat_value: string;
        stat_one_value: string;
        stat_max_value: string;
        stat_min_value: string;
        one_ingredient: {
          name: string;
          quantity: string;
        }[];
      }[]
    | undefined
) => {
  return stats
    ?.filter(
      (stat) => stat?.stat_name !== '해제' && stat?.stat_name !== '해제 2'
    )
    .every((s) => s?.stat_max_value === s?.stat_value);
};

export const isLimit2Every = (item: NewEquipmentType) => {
  return item.item_option.tuning_stat
    ?.filter((stat) => stat.stat_name !== '해제 2')
    .every((s) => s.stat_max_value === s.stat_value);
};
