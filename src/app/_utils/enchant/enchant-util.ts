import { AFFIX, getInfusionIndex } from '@/app/_constant/keyword';
import {
  EnchantGroupByAffix,
  EnchantOptionType,
  EnchantPrice,
  EnchantPriceType,
} from '@/app/_type/enchantType';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { convertToKST } from '../convert';
/**
 * - 인챈트의 효과를 정렬해주는 함수
 * @param data
 * @param order
 * @param type
 * @returns
 */
export const EnchantOptionSort = (
  data: EnchantOptionType[],
  order: Map<string, number>,
  type: string
) => {
  if (type === 'enchant') {
    return data
      .map((enchant) => {
        const effects = enchant.effects.sort((a, b) => {
          const aOrder = order.get(a.stat_name) ?? Infinity;
          const bOrder = order.get(b.stat_name) ?? Infinity;

          return aOrder - bOrder;
        });
        return {
          ...enchant,
          effects,
        };
      })
      .sort((a, b) => a.rank.toString().localeCompare(b.rank.toString()));
  } else {
    return data.sort((a, b) => {
      const aOrder = getInfusionIndex(a.name.toString());
      const bOrder = getInfusionIndex(b.name.toString());
      return aOrder - bOrder;
    });
  }
};

/**
 * - affix별로 인챈트를 그룹화 해주는 함수
 * @param param0
 * @returns
 */
export const enchantsByGroupSlot = ({
  enchantOptions,
  infusions,
}: {
  enchantOptions: EnchantOptionType[];
  infusions: EnchantOptionType[];
}) => {
  const map: EnchantGroupByAffix = new Map<
    string,
    {
      prefix: EnchantOptionType[];
      suffix: EnchantOptionType[];
      infusion: EnchantOptionType[];
    }
  >();

  [...enchantOptions, ...infusions].forEach((enchant) => {
    enchant.slot?.forEach(({ value: slotName }) => {
      if (!map.has(slotName)) {
        map.set(slotName, { prefix: [], suffix: [], infusion: [] });
      }

      const group = map.get(slotName)!;
      if (enchant.affix.toLowerCase() === AFFIX.prefix)
        group.prefix.push(enchant);
      if (enchant.affix.toLowerCase() === AFFIX.suffix)
        group.suffix.push(enchant);
      if (enchant.affix.toLowerCase() === AFFIX.infusion)
        group.infusion.push(enchant);
    });
  });

  return map;
};

/**
 * - 인챈트별 가격 정리해 주는 함수
 * @param enchantList
 * @param type
 * @returns
 */
export const filteredEnchantData = (
  enchantList: EnchantPrice[],
  type: string
) => {
  if (type === 'prefix') {
    return enchantList.reduce((acc, current) => {
      const enchantKey = current.item_option.prefix_enchant_preset_1;
      const existing = acc.get(enchantKey);

      if (
        !existing ||
        new Date(current.date_update) > new Date(existing.date_update)
      ) {
        acc.set(enchantKey, current);
      }

      return acc;
    }, new Map());
  } else {
    return enchantList.reduce((acc, current) => {
      const enchantKey = current.item_option.suffix_enchant_preset_1;
      const existing = acc.get(enchantKey);

      if (
        !existing ||
        new Date(current.date_update) > new Date(existing.date_update)
      ) {
        acc.set(enchantKey, current);
      }

      return acc;
    }, new Map());
  }
};

/**
 * - 인챈트 팔린 날짜 알려주는 함수
 * @param enchantList
 * @returns
 */
export const getEnchantDate = (enchantList: EnchantPriceType[]) => {
  if (enchantList.length === 0) return { firstDate: null, lastDate: null };

  const first =
    enchantList[0].item.length > 0 ? enchantList[0].item[0].date_update : null;

  const lastItem = enchantList[enchantList.length - 1];
  const last =
    lastItem.item.length > 0
      ? lastItem.item[lastItem.item.length - 1].date_update
      : null;

  const firstDate = convertToKST(first || '');
  const lastDate = convertToKST(last || '');

  return { firstDate, lastDate };
};

/**
 * - 연마 조건 확인 함수
 * @param item
 * @param targetRecord
 * @param stat_name
 * @returns
 */
export const isLimitPower = (
  item: NewEquipmentType,
  targetRecord: Record<string, number>,
  stat_name: string
): boolean => {
  const { tuning_stat, enhancement_level } = item?.item_option;
  const isSpecialItem =
    item.item_name.includes('와드네') || item.item_name.includes('에리우');

  const recentStats = tuning_stat.map((stat) => {
    const hasNewValue = targetRecord?.[stat.stat_name] !== undefined;

    return {
      ...stat,
      stat_value: hasNewValue
        ? targetRecord?.[stat.stat_name].toString()
        : stat.stat_value.toString(),
    };
  });

  /**
   * 와드네 및 에리우의 파괴력 2 연마 조건
   * 1. 파괴력 2를 제외한 모든 연마 완료
   */
  if (isSpecialItem) {
    if (stat_name === '파괴력 2') {
      return recentStats
        .filter((limit) => limit?.stat_name !== '파괴력 2')
        .every(
          (limit) =>
            limit?.stat_max_value.toString() === limit?.stat_value.toString()
        );
    }

    return true;
  }

  /**
   * 아르드리, 오르나 파괴력 연마 조건
   * 1. 아이템 13강화 이상
   * 2. 파괴력을 제외한 모든 연마 완료
   */
  if (!isSpecialItem) {
    if (stat_name === '파괴력') {
      const isAllStatsMax = recentStats
        .filter((limit) => !limit?.stat_name.includes('파괴력'))
        .every(
          (limit) =>
            limit?.stat_max_value.toString() === limit?.stat_value.toString()
        );
      const isHighEnhancement = Number(enhancement_level) >= 13;
      return isAllStatsMax && isHighEnhancement;
    }

    return true;
  }

  return false;
};
