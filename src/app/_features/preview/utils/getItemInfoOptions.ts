import { NewEquipmentType } from '@/app/_type/equipmentType';
import {
  prefix_enchant_name_list,
  prefix_enchant_options,
  suffix_enchant_name_list,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { beforeAndAfterStatsType } from '@/app/_type/previewType';
import { preview_infusion } from '@/app/_constant/infusions';
import { getOption } from './getOption';
import { getUsableItemEnchantList } from './getUsableItemEnchantList';
import { getUsableItemInfusionList } from './getUsableItemInfusionList';
import { findMatchingItem } from './findMatchingItem';

export const getItemInfoOptions = ({
  item_option,
  item_equipment_slot_name,
}: NewEquipmentType) => {
  const ability_name = item_option?.ability_name;
  const cach_color = item_option?.cash_item_color;
  const tuning_stat = item_option?.tuning_stat;

  const infusion_name =
    getOption<{ stat_name: string }>(
      item_option,
      'power_infusion_use_preset_no',
      'power_infusion_preset_1',
      'power_infusion_preset_2'
    )?.stat_name || '';

  const infusion_value =
    getOption<{ stat_value: string }>(
      item_option,
      'power_infusion_use_preset_no',
      'power_infusion_preset_1',
      'power_infusion_preset_2'
    )?.stat_value || '';

  const used_prefix_enchant_name =
    getOption<string>(
      item_option,
      'prefix_enchant_use_preset_no',
      'prefix_enchant_preset_1',
      'prefix_enchant_preset_2'
    ) || '';

  const used_suffix_enchant_name =
    getOption<string>(
      item_option,
      'suffix_enchant_use_preset_no',
      'suffix_enchant_preset_1',
      'suffix_enchant_preset_2'
    ) || '';

  const level = item_option?.enhancement_level;
  const prefix_enchant_name_1 = item_option?.prefix_enchant_preset_1;
  const prefix_enchant_name_2 = item_option?.prefix_enchant_preset_2;
  const used_prefix_enchant_number = item_option?.prefix_enchant_use_preset_no;

  const suffix_enchant_name_1 = item_option?.suffix_enchant_preset_1;
  const suffix_enchant_name_2 = item_option?.suffix_enchant_preset_2;
  const used_suffix_enchant_number = item_option?.suffix_enchant_use_preset_no;

  const infusion_1 = item_option?.power_infusion_preset_1;
  const infusion_2 = item_option?.power_infusion_preset_2;
  const used_infusion_number =
    item_option?.power_infusion_use_preset_no ?? null;

  const usablePrefixEnchantList = getUsableItemEnchantList({
    enchantList: prefix_enchant_name_list,
    optionsList: prefix_enchant_options,
    slot: item_equipment_slot_name,
  });

  const usableSuffixEnchantList = getUsableItemEnchantList({
    enchantList: suffix_enchant_name_list,
    optionsList: suffix_enchant_options,
    slot: item_equipment_slot_name,
  });

  const usableInfusionList = getUsableItemInfusionList(
    preview_infusion,
    item_equipment_slot_name
  );

  const existing_infusion = `${infusion_name ?? ''} ${infusion_value ?? ''}`;
  const existingInfuion = {
    upgreadeType: 'infusions',
    ...findMatchingItem(usableInfusionList, existing_infusion),
  } as beforeAndAfterStatsType;

  const existingPrefixEnchant = {
    upgreadeType: 'prefix',
    ...findMatchingItem(
      usablePrefixEnchantList,
      used_prefix_enchant_name ?? ''
    ),
  } as beforeAndAfterStatsType;

  const existingSuffixEnchant = {
    upgreadeType: 'suffix',
    ...findMatchingItem(
      usableSuffixEnchantList,
      used_suffix_enchant_name ?? ''
    ),
  } as beforeAndAfterStatsType;

  const slot = item_equipment_slot_name;

  return {
    ability_name,
    infusion_name,
    infusion_value,
    existingInfuion,
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
    existingPrefixEnchant,
    existingSuffixEnchant,
    infusion_1,
    infusion_2,
    used_infusion_number,
    slot,
    usableInfusionList,
    usablePrefixEnchantList,
    usableSuffixEnchantList,
    existing_infusion,
  };
};
