'use client';

import { memo } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Row from '@/app/_components/layout/Row';
import { getItemInfoOptions } from '../../../utils/getItemInfoOptions';
import { EquipmentType, NewEquipmentType } from '@/app/_type/equipmentType';
import PreviewEnchantModal from '../enchant/preview-enchant-modal';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import { EnchantOptionType } from '@/app/_type/enchantType';
import ItemEquipmentContainer from '@/app/_components/item/item-equipment-container';
import { getTooltipImageSrc } from '@/app/_utils/get';

const PreviewTableItem = memo(
  ({
    item,
    prefix = [],
    suffix = [],
    infusion = [],
  }: {
    item: EquipmentType;
    prefix: EnchantOptionType[];
    suffix: EnchantOptionType[];
    infusion: EnchantOptionType[];
  }) => {
    const {
      used_infusion_name,
      used_prefix_enchant_name,
      used_suffix_enchant_name,
    } = getItemInfoOptions(item);

    const existingInfuion = infusion.find(
      (item) => item.name === used_infusion_name
    );

    const existingPrefixEnchant = prefix.find(
      (item) => item.name === used_prefix_enchant_name
    );

    const existingSuffixEnchant = suffix.find(
      (item) => item.name === used_suffix_enchant_name
    );

    return (
      <Row className="flex h-full w-full items-center gap-2 text-[10px] sm:text-sm">
        <div className="flex w-12 items-center justify-center">
          <Popover>
            <PopoverTrigger className="h-full w-full">
              <div className="flex h-full flex-col items-center justify-center">
                <ImageIconUseBorder
                  className="h-9 w-9"
                  isRatingBorder={true}
                  itemName={item.item_name}
                  src={getTooltipImageSrc(
                    item.item_name,
                    item.item_equipment_slot_name
                  )}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="dark w-[350px] p-1 text-xs">
              <ItemEquipmentContainer
                item={item as NewEquipmentType}
                isIncreaseView={true}
                isViewBtn={false}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-1 flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-0">
          <div className="w-full">{used_infusion_name}</div>
          <div className="w-full text-blue-300">
            {infusion?.length >= 1 && (
              <PreviewEnchantModal
                itemName={item.item_name}
                enchants={infusion}
                affix="infusion"
                existing={existingInfuion ?? null}
                existingName={used_infusion_name}
              />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-0">
          <div className="w-full">{used_prefix_enchant_name}</div>
          <div className="w-full text-blue-300">
            {prefix?.length >= 1 && (
              <PreviewEnchantModal
                itemName={item.item_name}
                enchants={prefix}
                affix="prefix"
                existing={existingPrefixEnchant ?? null}
                existingName={used_prefix_enchant_name}
              />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-0">
          <div className="w-full">{used_suffix_enchant_name}</div>
          <div className="w-full text-blue-300">
            {suffix?.length >= 1 && (
              <PreviewEnchantModal
                itemName={item.item_name}
                enchants={suffix}
                affix="suffix"
                existing={existingSuffixEnchant ?? null}
                existingName={used_suffix_enchant_name}
              />
            )}
          </div>
        </div>
      </Row>
    );
  }
);

export default PreviewTableItem;

PreviewTableItem.displayName = 'PreviewTableItem';
