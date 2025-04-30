import React, { memo, useMemo } from 'react';
import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ItemCraftingItemProps } from '../../types';
import Row from '@/app/_components/layout/Row';
import ItemTooltipByType from '@/app/_components/tooltip/ItemTooltipByType';
import CratingSelectImage from './CratingSelectImage';
import CraftingSelectBtn from './CraftingSelectBtn';
import { getItemOrMaterialsRating } from '../../utils/getItemRating';

const CraftingItem = memo(
  ({
    item_name,
    isSelect,
    setMaterials,
    category,
    filter,
  }: ItemCraftingItemProps) => {
    const src = useMemo(() => getTooltipImageSrc(item_name), [item_name]);
    const itemRating = getItemOrMaterialsRating(filter, item_name);

    const handleClick = () => {
      setMaterials(item_name, category);
    };

    return (
      <div key={item_name} className="h-full text-xs">
        <Row className="h-full items-center justify-center gap-1">
          <Popover>
            <PopoverTrigger className="h-full">
              <div className="flex h-full items-center justify-center">
                <CratingSelectImage
                  isSelect={isSelect}
                  itemName={item_name}
                  src={src}
                />
              </div>
            </PopoverTrigger>
            <CraftingSelectBtn
              category={category}
              isSelect={isSelect}
              itemName={item_name}
              itemRating={itemRating || '일반'}
              onClick={handleClick}
            />
            <PopoverContent className="dark w-[350px] p-1">
              <ItemTooltipByType itemName={item_name} category={category} />
            </PopoverContent>
          </Popover>
        </Row>
      </div>
    );
  }
);

export default CraftingItem;

CraftingItem.displayName = 'CraftingItem';
