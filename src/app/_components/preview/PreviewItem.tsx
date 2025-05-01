'use client';

import BeforeAndAfter from '../common/beforeAndAfter/BeforeAndAfter';
import Row from '../layout/Row';
import { PrviewItemProps } from '@/app/_type/previewType';
import ItemTooltip from '../tooltip/ItemTooltip';
import PreviewModal from '../preview/menu/PreviewModal';
import { getItemInfoOptions } from '../iteminfo/util/getItemInfoOptions';
import OneGrindingDialog from '../dialog/OneGrindingDialog';
import { memo } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ItemPrviewImage from '../iteminfo/info/ItemPrviewImage';

const PreviewItem = memo(({ item, slot }: PrviewItemProps) => {
  const itemName = {
    name: item.item_name ?? '',
    level: item?.item_option?.enhancement_level ?? '',
  };

  const {
    usableInfusionList,
    usablePrefixEnchantList,
    usableSuffixEnchantList,
    existingPrefixEnchant,
    existingSuffixEnchant,
    existingInfuion,
  } = getItemInfoOptions(item);

  const {
    beforeInfusionName,
    beforeInfusionValue,
    beforePrefixEnchantName,
    beforeSuffixEnchantName,
  } = item?.before;

  return (
    <Row className="flex h-full w-full items-center gap-2 text-sm">
      <BeforeAndAfter className="w-20 justify-start sm:justify-center">
        {/* <BeforeAndAfter.Title>아이템 이름</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            <Popover>
              <PopoverTrigger className="h-full w-full">
                <div className="flex h-full flex-col items-center justify-center">
                  <ItemPrviewImage
                    materials={item.item_name}
                    slot={item.item_equipment_slot_name}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="dark w-[350px] p-1">
                <ItemTooltip
                  isItemInfo={true}
                  itemName={item.item_name}
                  {...item}
                />
              </PopoverContent>
            </Popover>
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
      <BeforeAndAfter className="w-6">
        {/* <BeforeAndAfter.Title>연마</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {item.item_option.tuning_stat !== null ? (
              <div className="flex items-center justify-center">
                <OneGrindingDialog item={item} />
              </div>
            ) : null}
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>정령</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {beforeInfusionName + beforeInfusionValue}
          </BeforeAndAfter.Before>

          <BeforeAndAfter.After>
            {usableInfusionList?.length >= 1 && (
              <PreviewModal
                itemName={itemName}
                existing={existingInfuion}
                upgreadeType="infusions"
                slot={slot}
                usableItemList={usableInfusionList}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>접두</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {beforePrefixEnchantName || ''}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>
            {usablePrefixEnchantList?.length >= 1 && (
              <PreviewModal
                itemName={itemName}
                existing={existingPrefixEnchant}
                upgreadeType="prefix"
                slot={slot}
                usableItemList={usablePrefixEnchantList}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>접미</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {beforeSuffixEnchantName || ''}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>
            {usableSuffixEnchantList?.length >= 1 && (
              <PreviewModal
                itemName={itemName}
                existing={existingSuffixEnchant}
                upgreadeType="suffix"
                slot={slot}
                usableItemList={usableSuffixEnchantList}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
    </Row>
  );
});

export default PreviewItem;

PreviewItem.displayName = 'PreviewItem';
