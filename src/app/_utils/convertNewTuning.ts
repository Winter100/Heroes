import { NewEquipmentType, NewTuning_stat } from '../_type/equipmentType';

export const convertNewTuning = (item: NewEquipmentType) => {
  return item.item_option.tuning_stat?.map((stat, _, arr) => {
    {
      /*
      와드네의 경우
      해제2 를 제외한 모든 연마가 완료되어야 해제2 연마 버튼 활성화
      */
    }
    if (item.item_name.includes('와드네')) {
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

    {
      /* 
      에리우의 경우
      해제2는 해제1을 완료해야만 해제2 버튼 활성화
      (에리우로 오기 위해선 와드네 기본 연마가 다 완료되어 있어야함)
      */
    }
    if (item.item_name.includes('에리우')) {
      if (stat.stat_name === '해제 2') {
        const isLimitTrue = arr
          .filter((s) => s.stat_name === '해제')
          .every((s) => s.stat_max_value === s.stat_value);
        return {
          ...stat,
          isView: isLimitTrue,
        };
      }

      {
        /*
        해제 3의 경우 해제3을 제외한 모든 연마가 완료되어 있어야함
        (에리우부터 해제3 가능)
        */
      }
      if (stat.stat_name === '해제 3') {
        const isLimitTrue = arr
          .filter((s) => s.stat_name !== '해제 3')
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

export const isLimitEvery = (
  item: NewEquipmentType,
  callback: (stat: NewTuning_stat) => boolean
) => {
  return item.item_option.tuning_stat
    ?.filter(callback)
    .every((s) => s.stat_max_value === s.stat_value);
};
