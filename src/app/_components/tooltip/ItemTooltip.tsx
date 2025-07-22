'use client';
import { itemInfoMap } from '@/app/_constant/items/item_map';
import { ItemInfoQuipmentProps } from '@/app/_type/equipmentType';
import { convertItemNameBySlot } from '../../_utils/iteminfo/convertItemNameBySlot';
import ItemInfo from '../iteminfo/info/ItemInfo';
import { memo } from 'react';
import { getItemInfoOptions } from '@/app/_features/preview/utils/getItemInfoOptions';
import { oneGrinding } from '@/app/_constant/grinding';
import { craftingStatsMerge } from '../../_utils/iteminfo/craftingStatsMerge';
import { getGradeValue } from '@/app/_utils/get/getStatsByLevel';

const ItemTooltip = memo(
  ({
    itemName,
    // isItemInfo = false,
    ...props
  }: {
    itemName: string;
    // isItemInfo?: boolean;
  } & Partial<ItemInfoQuipmentProps>) => {
    // 무기의 경우 '고급 와드네 롱소드' - > '고급 와드네 무기' 로 변경하기 위해 사용
    const { gradeMatch, itemName: name } = convertItemNameBySlot(
      itemName,
      props?.item_equipment_slot_name || ''
    );

    // 무기의 경우 '고급 와드네 무기', 그 외 아이템은 아이템 이름 그대로 사용
    const gName = gradeMatch ? `${gradeMatch} ${name}` : name;

    // 해당 아이템의 정보를 가져옴
    const itemInfo = itemInfoMap?.get(gName);

    const equipment: ItemInfoQuipmentProps = {
      ...props,
    } as ItemInfoQuipmentProps;

    const {
      used_prefix_enchant_name,
      used_suffix_enchant_name,
      tuning_stat,
      prefix_enchant_name_1,
      prefix_enchant_name_2,
      used_prefix_enchant_number,
      usableInfusionList,
      suffix_enchant_name_1,
      suffix_enchant_name_2,
      used_suffix_enchant_number,
      existingPrefixEnchant,
      existingSuffixEnchant,
      level,
      infusion_1,
      infusion_2,
      used_infusion_number,
      infusion_name,
      slot: equipmentSlotName,
    } = getItemInfoOptions(equipment);

    const item_name = itemName ? itemName : name;
    const rating = itemInfo?.rating;
    const slot = equipmentSlotName ? equipmentSlotName : itemInfo?.slot;
    const setName = itemInfo?.set;
    const tuningStats = tuning_stat ?? undefined;

    const item_stage = getGradeValue(gName);
    const mergedStats = itemInfo?.enhancement_options?.[item_stage];
    const grindingItem = oneGrinding
      .find((item) => item.title === itemInfo?.set)
      ?.item.find((i) => i.item_slot.includes(slot || ''));

    const craftingNeedTuningStats = grindingItem?.item_value.map((stat) => {
      if (stat.stat_name === '해제') {
        return {
          ...stat,
          stat_name: stat.stat_name,
          stat_min_value: '0',
          stat_value: '0',
        };
      }

      return {
        ...stat,
        stat_name: stat.stat_name,
        stat_min_value: stat.stat_max_value,
        stat_value: stat.stat_max_value,
      };
    });

    const newMergedStats = craftingStatsMerge(
      mergedStats || [],
      craftingNeedTuningStats || []
    ).filter((stat) => stat.stat_value);

    return (
      <div className="select-none">
        <ItemInfo
          itemName={item_name}
          level={level || ''}
          slot={slot || ''}
          itemRating={rating}
          setName={setName}
          tuning_stat={tuningStats}
          prefixEnchantName={used_prefix_enchant_name}
          suffixEnchantName={used_suffix_enchant_name}
          category={itemInfo?.category}
          restrictions={itemInfo?.restrictions}
          description={itemInfo?.description}
          infusion1={infusion_1}
          infusion2={infusion_2}
          used_infusion_number={used_infusion_number}
          infustionName={infusion_name}
          isInfusions={
            used_infusion_number !== null && used_infusion_number !== 0
          }
          usableInfusionListLength={usableInfusionList.length}
          used_prefix_enchant_number={used_prefix_enchant_number}
          prefix_enchant_name_1={prefix_enchant_name_1}
          prefix_enchant_name_2={prefix_enchant_name_2}
          used_suffix_enchant_number={used_suffix_enchant_number}
          suffix_enchant_name_1={suffix_enchant_name_1}
          suffix_enchant_name_2={suffix_enchant_name_2}
          prefixRank={existingPrefixEnchant?.rank}
          prefixValue={existingPrefixEnchant?.stat_value}
          suffixRank={existingSuffixEnchant?.rank}
          suffixValue={existingSuffixEnchant?.stat_value}
          set={itemInfo?.set}
          newTuningStats={!tuningStats ? craftingNeedTuningStats : null}
          newMergedStats={!tuningStats ? newMergedStats : null}
        />
      </div>
    );
  }
);

export default ItemTooltip;

ItemTooltip.displayName = 'ItemTooltip';
