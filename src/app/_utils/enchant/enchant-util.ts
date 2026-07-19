import { AFFIX, getInfusionIndex } from '@/app/_constant/keyword';
import {
  EnchantGroupByAffix,
  EnchantOptionType,
} from '@/app/_type/enchantType';
import { NewEquipmentType } from '@/app/_type/equipmentType';
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

export const getRankCategoryMap = (
  enchantList: EnchantOptionType[]
): Record<string, string[]> => {
  const prefixSlots = new Set<string>();
  const suffixSlots = new Set<string>();

  enchantList.forEach((item) => {
    if (item.affix.toUpperCase() === 'PREFIX') {
      if (!item.slot) return;
      getUniqueBaseStrings(item.slot.map((s) => s.name)).forEach((enchant) =>
        prefixSlots.add(enchant)
      );
    } else if (item.affix.toUpperCase() === 'SUFFIX') {
      if (!item.slot) return;
      getUniqueBaseStrings(item.slot.map((s) => s.name)).forEach((enchant) =>
        suffixSlots.add(enchant)
      );
    }
  });

  const sortDescending = (Slotset: Set<string>): string[] => {
    return Array.from(Slotset).sort((a, b) => Number(a) - Number(b));
  };

  return {
    접두: sortDescending(prefixSlots),
    접미: sortDescending(suffixSlots),
  };
};

export function getUniqueBaseStrings(inputArray: string[]): string[] {
  const suffixRegex = /\s*\([a-zA-Z]\)$/;
  const uniqueSet = new Set<string>(
    inputArray.map((str) => str.replace(suffixRegex, '').trim())
  );
  return Array.from(uniqueSet);
}
