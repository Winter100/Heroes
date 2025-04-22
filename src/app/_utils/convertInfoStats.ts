import { convertItemNameBySlot } from '../_components/iteminfo/util/convertItemNameBySlot';
import { getItemInfoOptions } from '../_components/iteminfo/util/getItemInfoOptions';
import { mergeStats } from '../_components/preview/utils/someStats';
import { itemInfoMap } from '../_constant/items/item_map';
import { NewEquipmentType } from '../_type/equipmentType';
import { getQualityStats } from './getQualityStat';
import { convertLevel } from './getStatsByLevel';

const filterData = [
  '공격력',
  '마법공격력',
  '밸런스',
  '크리티컬',
  '크리티컬 피해량',
  '공격속도',
  '힘',
  '민첩',
  '의지',
  '지능',
  '생명력',
  '최대 생명력',
  '방어력',
  '파괴시 방어력',
  '최대 스태미나',
  '크리티컬 저항',
  '대항력',
  '추가피해',
  '해제',
];

export const convertInfoStat = (item: NewEquipmentType) => {
  const {
    existingPrefixEnchant,
    existingSuffixEnchant,
    infusion_name,
    infusion_value,
    level,
  } = getItemInfoOptions(item);

  const before = {
    beforePrefixEnchantName: existingPrefixEnchant.name,
    beforeSuffixEnchantName: existingSuffixEnchant.name,
    beforeInfusionName: infusion_name,
    beforeInfusionValue: infusion_value,
  };

  const { gradeMatch, itemName } = convertItemNameBySlot(
    item.item_name,
    item.item_equipment_slot_name
  );

  const item_level = level || gradeMatch;
  const gName = gradeMatch ? `${gradeMatch} ${itemName}` : itemName;

  const baseItem = itemInfoMap?.get(gName);
  const rating = baseItem?.rating || null;

  const levelNumber = convertLevel(item_level);

  // 이게 base Item 옵션임
  // 아이템 제작에서는 이 옵션을 보여주면 됨.
  const itemOptions = baseItem?.enhancement_options?.[levelNumber] ?? null;

  // 퀄리티로인한 스탯
  const quality = 5;
  // const quality = baseItem?.quality || 2;
  const qualityStats = baseItem?.quality_stats || [];

  // 와드네의 경우 무기의 경우 무기로 이름을 바꿔줘야함
  const calculatedQualityStats =
    getQualityStats(quality, itemOptions, qualityStats) || [];

  const prefix_enchant_value = existingPrefixEnchant.stat_value || [];
  const suffifix_enchant_value = existingSuffixEnchant.stat_value || [];
  const new_infusion_value = [
    {
      stat_name: infusion_name,
      stat_value: infusion_value,
    },
  ];

  // 유저의 아이템과 연마로 계산된 스탯
  const tuningStat =
    item.item_option.tuning_stat?.map((stat) => {
      return { stat_name: stat.stat_name, stat_value: stat.stat_value };
    }) || [];

  // 생명력과 최대 생명력 하나로 합쳐야함
  const mergedStatsOne = mergeStats([
    ...calculatedQualityStats,
    ...prefix_enchant_value,
    ...suffifix_enchant_value,
    ...new_infusion_value,
    ...tuningStat,
  ])
    .filter((statName) => filterData.includes(statName.stat_name))
    .filter((stat) => stat.stat_value.toString() !== '0');

  const attackPower = mergedStatsOne?.find(
    (stat) => stat.stat_name === '공격력'
  )?.stat_value;

  const mergedStats = mergedStatsOne?.map((stat) => {
    if (stat.stat_name === '마법공격력') {
      return { ...stat, stat_value: attackPower || stat?.stat_value };
    }
    return { ...stat };
  });

  return { mergedStats, rating, quality, before };
};
