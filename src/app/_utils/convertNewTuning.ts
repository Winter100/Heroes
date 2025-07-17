import { NewEquipmentType, NewTuning_stat } from '../_type/equipmentType';

export const convertNewTuning = (item: NewEquipmentType) => {
  return item.item_option.tuning_stat?.map((stat, _, arr) => {
    {
      /*
      와드네 및 에리우의 경우
      해제2 를 제외한 모든 연마가 완료되어야 해제2 연마 버튼 활성화
      */
    }
    if (
      item.item_name.includes('와드네') ||
      item.item_name.includes('에리우')
    ) {
      if (stat.stat_name === '해제 2') {
        const isLimitTrue = arr
          .filter((s) => s.stat_name !== '해제 2')
          .every((s) => s.stat_max_value === s.stat_value);
        return {
          ...stat,
          isView: isLimitTrue,
        };
      }

      return {
        ...stat,
        isView: true,
      };
    }

    if (stat.stat_name === '해제') {
      const allOtherStatsMatch =
        arr
          .filter((s) => !s.stat_name.includes('해제'))
          .every((s) => s.stat_max_value === s.stat_value) &&
        Number(item.item_option.enhancement_level) >= 13;
      return {
        ...stat,
        isView: allOtherStatsMatch,
      };
    }

    return {
      ...stat,
      isView: true,
    };
  });
};

/**
 *
 * @param item : 장비
 * @param callback : 해당 스탯을 제외한 나머지 콜백
 * @returns : boolean 연마 완료 여부
 */
export const isLimitEvery = (
  item: NewEquipmentType,
  callback: (stat: NewTuning_stat) => boolean
) => {
  return item.item_option.tuning_stat
    ?.filter(callback)
    .every((s) => s.stat_max_value === s.stat_value);
};
