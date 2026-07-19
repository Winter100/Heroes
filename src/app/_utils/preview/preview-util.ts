import {
  cach_slot_name,
  slot_name,
} from '@/app/_constant/character/item-slot-name';
import { EquipmentType } from '@/app/_type/equipmentType';
import { getSpecificTitle } from './getSpecificTitle';
import { GrindType } from '@/app/_type/itemType';

interface UpdateStats {
  stat_min_value: string;
  stat_name: string;
  stat_value: string;
  stat_one_value: string;
  stat_max_value: string;
  one_ingredient: {
    name: string;
    quantity: string;
  }[];
}

/*
- 공격력 제한 해제를 파괴력으로 변경
 */
export const bagList = (bag: EquipmentType[]) => {
  return slot_name.map((slot) => {
    const foundItem = bag.find(
      (items) => items.item_equipment_slot_name === slot.item_slot
    );

    return foundItem
      ? {
          ...foundItem,
          item_option: {
            ...foundItem.item_option,
            tuning_stat: foundItem.item_option.tuning_stat?.map((stat) =>
              stat.stat_name === '공격력 제한 해제'
                ? { ...stat, stat_name: '파괴력' }
                : stat
            ),
          },
        }
      : {
          item_equipment_page: 'Bag',
          item_equipment_slot_name: slot.item_slot,
          item_name: slot.item_name,
          item_option: {
            enhancement_level: null,
            tuning_stat: [
              {
                stat_name: '',
                stat_value: '',
              },
            ],
            ability_name: '',
            prefix_enchant_use_preset_no: 1,
            suffix_enchant_use_preset_no: 1,
            prefix_enchant_preset_1: '',
            suffix_enchant_preset_1: '',
            prefix_enchant_preset_2: '',
            suffix_enchant_preset_2: '',
            power_infusion_use_preset_no: 1,
            power_infusion_preset_1: {
              stat_name: '',
              stat_value: '',
            },
            power_infusion_preset_2: {
              stat_name: '',
              stat_value: '',
            },
            cash_item_color: {
              color_1: '',
              color_2: '',
              color_3: '',
              color_4: '',
              color_5: '',
            },
            avatar_color_use_preset_no: null,
            avatar_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_inner_armor_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
          },
        };
  });
};
export const cachList = (cach: EquipmentType[]) => {
  return cach_slot_name.map((slot) => {
    const foundItem = cach.find(
      (items) => items.item_equipment_slot_name === slot.item_slot
    );

    return foundItem
      ? {
          ...foundItem,
        }
      : {
          item_equipment_page: 'Cach',
          item_equipment_slot_name: slot.item_slot,
          item_name: slot.item_name,
          item_option: {
            enhancement_level: null,
            // tuning_stat: [
            //   {
            //     stat_name: "",
            //     stat_value: "",
            //   },
            // ],
            ability_name: '',
            prefix_enchant_use_preset_no: 0,
            suffix_enchant_use_preset_no: 0,
            prefix_enchant_preset_1: '',
            suffix_enchant_preset_1: '',
            prefix_enchant_preset_2: '',
            suffix_enchant_preset_2: '',
            power_infusion_use_preset_no: 0,
            power_infusion_preset_1: {
              stat_name: '',
              stat_value: '',
            },
            power_infusion_preset_2: {
              stat_name: '',
              stat_value: '',
            },
            cash_item_color: {
              color_1: '',
              color_2: '',
              color_3: '',
              color_4: '',
              color_5: '',
            },
            avatar_color_use_preset_no: null,
            avatar_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_inner_armor_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
          },
        };
  });
};

/**
 * 연마 그래프 계산
 */
export const calculateNearestProgress = (
  percentage: number,
  maxValue: string,
  oneValue: string
) => {
  const max = Number(maxValue);
  const step = Number(oneValue);
  const targetValue = max * (percentage / 100);
  const nearestProgress = Math.round(targetValue / step) * step;
  return Math.min(nearestProgress, max);
};

/**
 * - 연마에 필요한 정보 입력 함수
 * @param item
 * @param grind
 * @returns
 */
export const getNewTuning = (item: EquipmentType, grind: GrindType[]) => {
  const item_title = getSpecificTitle(item?.item_name);
  const item_slot = item?.item_equipment_slot_name;

  const grinding = grind
    .find((item) => item?.title?.includes(item_title))
    ?.item.find((item) => item?.item_slot?.includes(item_slot));

  const tuning_stat = grinding?.item_value.map((stat) => {
    const tuning_stat = item?.item_option?.tuning_stat;
    const findStat = tuning_stat?.find((s) => s.stat_name === stat.stat_name);

    if (findStat) {
      return {
        ...stat,
        ...findStat,
        stat_min_value: findStat.stat_value ?? '0',
      };
    } else {
      return {
        ...stat,
        stat_value: '0',
        stat_min_value: '0',
      };
    }
  });

  const newTuning = updateStats(tuning_stat as UpdateStats[]);

  return newTuning;
};

{
  /* 
  아이템의 파괴력 정보는 모두 합쳐진 값이 온다. (ex: 8000)
  하지만 각 파괴력 단계마다 최대 수치가 정해져있음 '1단계는 최대 2000', '2단계는 최대 3000' 이런 식으로.
  파괴력 정보에서 각 단계의 수치를 넘으면 넘치는 수치만큼 다음 파괴력에 분배 해줘야함.
  */
}
const updateStats = (tuningStats: UpdateStats[]) => {
  // 파괴력 정보 세팅
  const limit1 = tuningStats?.find((stat) => stat.stat_name === '파괴력');
  const limit2 = tuningStats?.find((stat) => stat.stat_name === '파괴력 2');

  if (
    limit1 &&
    limit2 &&
    parseInt(limit1.stat_value) > parseInt(limit1.stat_max_value)
  ) {
    const limit2Value =
      Number(limit1.stat_value) - Number(limit1.stat_max_value);

    limit1.stat_min_value = limit1.stat_max_value;
    limit1.stat_value = limit1.stat_max_value;

    limit2.stat_min_value = limit2Value.toString();
    limit2.stat_value = limit2Value.toString();
  }

  return tuningStats;
};
