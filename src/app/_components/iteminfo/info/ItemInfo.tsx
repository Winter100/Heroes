import { memo } from 'react';
import { ItemType } from '@/app/_type/infoInfoType';
import { getItemInfoOptions } from '../util/getItemInfoOptions';
import { convertItemNameBySlot } from '../util/convertItemNameBySlot';
import Item from '../../common/item/Item';
import ItemTop from '../top/ItemTop';
import Itemrestrictions from '../restrictions/Itemrestrictions';
import InfoGrindingList from '../grinding/InfoGrindingList';
import ItemInfusion from '../infusion/ItemInfusion';
import ItemEnchantBox from '../ItemEnchantBox';
import ItemSet from './ItemSet';
import { ItemInfoQuipmentProps } from '@/app/_type/equipmentType';

interface ItemInfoProps {
  equipment: ItemInfoQuipmentProps;
  itemInfo: ItemType | undefined;
}

const ItemInfo = memo(({ equipment, itemInfo }: ItemInfoProps) => {
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
    slot,
    infusion_name,
  } = getItemInfoOptions(equipment);

  const itemName = equipment?.item_name;
  const { gradeMatch } = convertItemNameBySlot(itemName, slot || '');

  const isInfusions =
    used_infusion_number !== null && used_infusion_number !== 0;

  const itemRating = itemInfo?.rating || gradeMatch;

  return (
    <Item className="flex w-full flex-col gap-1">
      <ItemTop
        slot={slot}
        category={itemInfo?.category ?? []}
        itemName={itemName}
        itemRating={itemRating}
        level={level}
        name={equipment.item_name}
        prefixEnchantName={used_prefix_enchant_name}
        suffixEnchantName={used_suffix_enchant_name}
      />

      {itemInfo?.restrictions && (
        <>
          <Itemrestrictions restrictions={itemInfo?.restrictions} />
          <Item.Border />
        </>
      )}

      {itemInfo?.description && (
        <>
          <Item.Description>
            <Item.Content className="text-[rgb(189,164,123)]">
              {itemInfo?.description}
            </Item.Content>
          </Item.Description>
          <Item.Border />
        </>
      )}

      {tuning_stat && (
        <>
          <InfoGrindingList
            itemName={equipment.item_name || ''}
            slot={slot || ''}
            setName={itemInfo?.set || ''}
            tuning_stat={tuning_stat}
          />
          <Item.Border />
        </>
      )}

      {infusion_name && isInfusions && usableInfusionList?.length > 1 && (
        <ItemInfusion
          infusion1={infusion_1}
          infusion2={infusion_2}
          usedNumber={used_infusion_number}
        />
      )}

      {used_prefix_enchant_name && (
        <ItemEnchantBox
          title="접두"
          useText1={prefix_enchant_name_1}
          useText2={prefix_enchant_name_2}
          useNumber={used_prefix_enchant_number}
          usedEnchantName={used_prefix_enchant_name}
          existingEnchantRank={existingPrefixEnchant?.rank}
          existingEnchantValue={existingPrefixEnchant?.stat_value}
        />
      )}

      {used_suffix_enchant_name && (
        <ItemEnchantBox
          title="접미"
          useText1={suffix_enchant_name_1}
          useText2={suffix_enchant_name_2}
          useNumber={used_suffix_enchant_number}
          usedEnchantName={used_suffix_enchant_name}
          existingEnchantRank={existingSuffixEnchant?.rank}
          existingEnchantValue={existingSuffixEnchant?.stat_value}
        />
      )}
      {itemInfo?.set && <ItemSet set={itemInfo?.set} />}
    </Item>
  );
});

export default ItemInfo;

ItemInfo.displayName = 'ItemInfo';
