'use client';
import { itemInfoMap } from '@/app/_constant/items/item_map';
import { ItemType } from '@/app/_type/infoInfoType';
import { ItemInfoQuipmentProps } from '@/app/_type/equipmentType';
import { convertItemNameBySlot } from '../iteminfo/util/convertItemNameBySlot';
import ItemInfo from '../iteminfo/info/ItemInfo';
import ItemCreaftingInfo from '../iteminfo/info/ItemCreaftingInfo';
import { memo } from 'react';

const ItemTooltip = memo(
  ({
    itemName,
    isItemInfo = false,
    ...props
  }: {
    itemName: string;
    isItemInfo?: boolean;
  } & Partial<ItemInfoQuipmentProps>) => {
    const { gradeMatch, itemName: name } = convertItemNameBySlot(
      itemName,
      props?.item_equipment_slot_name || ''
    );

    const gName = gradeMatch ? `${gradeMatch} ${name}` : name;

    const itemInfo = itemInfoMap?.get(gName);

    const equipment: ItemInfoQuipmentProps = {
      ...props,
    } as ItemInfoQuipmentProps;

    return (
      <div className="select-none">
        {isItemInfo ? (
          <ItemInfo itemInfo={itemInfo} equipment={equipment} />
        ) : (
          <ItemCreaftingInfo {...(itemInfo as ItemType)} />
        )}
      </div>
    );
  }
);

export default ItemTooltip;

ItemTooltip.displayName = 'ItemTooltip';
