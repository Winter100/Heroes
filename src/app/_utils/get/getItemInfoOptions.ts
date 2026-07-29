import { EquipmentType } from '@/app/_type/equipmentType';
import { Item_Rating } from '@/app/_type/infoInfoType';
import { getOption } from './get-util';

const grades = ['초급', '중급', '고급', '레어', '전설'] as const;

/**
 * @param item
 * @returns 현재 아이템의 강화, 인챈트, 연마 등 상세 내용을 반환합니다.
 */
export const getItemInfoOptions = (item: EquipmentType) => {
  const itemOption = item.item_option;
  const slot = item.item_equipment_slot_name;
  const ability_name = itemOption?.ability_name;
  const cach_color = itemOption?.cash_item_color;
  const tuning_stat = itemOption?.tuning_stat;

  const infusion_name =
    getOption<{ stat_name: string }>(
      itemOption,
      'power_infusion_use_preset_no',
      'power_infusion_preset_1',
      'power_infusion_preset_2'
    )?.stat_name || '';

  const infusion_value =
    getOption<{ stat_value: string }>(
      itemOption,
      'power_infusion_use_preset_no',
      'power_infusion_preset_1',
      'power_infusion_preset_2'
    )?.stat_value || '';

  const used_prefix_enchant_name =
    getOption<string>(
      itemOption,
      'prefix_enchant_use_preset_no',
      'prefix_enchant_preset_1',
      'prefix_enchant_preset_2'
    ) || '';

  const used_suffix_enchant_name =
    getOption<string>(
      itemOption,
      'suffix_enchant_use_preset_no',
      'suffix_enchant_preset_1',
      'suffix_enchant_preset_2'
    ) || '';

  const grade: Item_Rating =
    grades.find((grade) => item?.item_name?.includes(grade)) || null;

  const level = itemOption?.enhancement_level;
  const prefix_enchant_name_1 = itemOption?.prefix_enchant_preset_1;
  const prefix_enchant_name_2 = itemOption?.prefix_enchant_preset_2;
  const used_prefix_enchant_number = itemOption?.prefix_enchant_use_preset_no;

  const suffix_enchant_name_1 = itemOption?.suffix_enchant_preset_1;
  const suffix_enchant_name_2 = itemOption?.suffix_enchant_preset_2;
  const used_suffix_enchant_number = itemOption?.suffix_enchant_use_preset_no;

  const infusion_1 = itemOption?.power_infusion_preset_1;
  const infusion_2 = itemOption?.power_infusion_preset_2;
  const used_infusion_number = itemOption?.power_infusion_use_preset_no ?? null;
  const used_infusion_name = `${infusion_name ?? ''} ${infusion_value ?? ''}`;

  return {
    ability_name,
    infusion_name,
    infusion_value,
    used_prefix_enchant_name,
    used_suffix_enchant_name,
    cach_color,
    tuning_stat,
    level,
    prefix_enchant_name_1,
    prefix_enchant_name_2,
    used_prefix_enchant_number,
    suffix_enchant_name_1,
    suffix_enchant_name_2,
    used_suffix_enchant_number,
    infusion_1,
    infusion_2,
    used_infusion_number,
    slot,
    used_infusion_name,
    grade,
  };
};
