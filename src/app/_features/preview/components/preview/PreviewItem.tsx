'use client';

import { PrviewItemProps } from '@/app/_type/previewType';
import { memo } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Row from '@/app/_components/layout/Row';
import { getItemInfoOptions } from '../../utils/getItemInfoOptions';
import ItemTooltip from '@/app/_components/tooltip/ItemTooltip';
import PreviewModal from '@/app/_features/preview/components/preview/PreviewModal';
import OneGrindingDialog from './grinding';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import { getTooltipImageSrc } from '@/app/_utils/get/getTooltipImageSrc';

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

  const src = getTooltipImageSrc(itemName.name, slot);

  return (
    <Row className="flex h-full w-full items-center gap-2 text-[10px] sm:text-sm">
      <div className="flex w-12 items-center justify-center">
        <Popover>
          <PopoverTrigger className="h-full w-full">
            <div className="flex h-full flex-col items-center justify-center">
              <ImageIconUseBorder
                className="h-9 w-9"
                isRatingBorder={true}
                itemName={itemName.name}
                src={src}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="dark w-[350px] p-1">
            <ItemTooltip itemName={item.item_name} {...item} />
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-5">
        {item.item_option.tuning_stat !== null ? (
          <div className="flex items-center justify-center">
            <OneGrindingDialog item={item} />
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-0">
        <div className="w-full">{`${beforeInfusionName} ${beforeInfusionValue}`}</div>
        <div className="w-full text-blue-300">
          {usableInfusionList?.length >= 1 && (
            <PreviewModal
              itemName={itemName}
              existing={existingInfuion}
              upgreadeType="infusions"
              slot={slot}
              usableItemList={usableInfusionList}
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-0">
        <div className="w-full"> {beforePrefixEnchantName || ''}</div>
        <div className="w-full text-blue-300">
          {usablePrefixEnchantList?.length >= 1 && (
            <PreviewModal
              itemName={itemName}
              existing={existingPrefixEnchant}
              upgreadeType="prefix"
              slot={slot}
              usableItemList={usablePrefixEnchantList}
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-0">
        <div className="w-full"> {beforeSuffixEnchantName || ''}</div>
        <div className="w-full text-blue-300">
          {usableSuffixEnchantList?.length >= 1 && (
            <PreviewModal
              itemName={itemName}
              existing={existingSuffixEnchant}
              upgreadeType="suffix"
              slot={slot}
              usableItemList={usableSuffixEnchantList}
            />
          )}
        </div>
      </div>
    </Row>
  );
});

export default PreviewItem;

PreviewItem.displayName = 'PreviewItem';
