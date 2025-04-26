import { memo } from 'react';
import { MaterialsType } from '@/app/_constant/items/item_crafting_materials_list';
import { itemInfoMap, materialsMap } from '@/app/_constant/items/item_map';
import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import TooltipImage from '../../common/tooltip/TooltipImage';
import Item from '../../common/item/Item';
import CraftingQuantity from '../crafting/CraftingQuantity';
import ItemTooltipByType from '../../tooltip/ItemTooltipByType';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface MaterialsCraftingItemProps extends MaterialsType {
  depth?: number;
  category: string;
}
const MaterialsCraftingItem = memo(
  ({
    item_name,
    item_quantity,
    category,
    // depth,
  }: MaterialsCraftingItemProps) => {
    const itemRating = itemInfoMap?.get(item_name)?.rating;
    const materialsRating = materialsMap?.get(item_name)?.item_rating;

    const src = getTooltipImageSrc(item_name);

    return (
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center">
          <Popover>
            <PopoverTrigger className="h-full w-full text-xs hover:bg-muted/50">
              <div className="flex h-full flex-1 items-center">
                <div className="flex flex-1 items-center gap-2">
                  <TooltipImage
                    src={src}
                    itemName={item_name}
                    isRatingBorder={true}
                  />
                  <Item.Title type={itemRating || materialsRating || '일반'}>
                    {item_name}
                  </Item.Title>
                </div>
                <div className="flex items-center md:w-40">
                  <div className="w-4">x</div>
                  <div className="flex w-full items-center">
                    <CraftingQuantity item_quantity={item_quantity} />
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="dark w-[350px] p-1">
              <ItemTooltipByType itemName={item_name} category={category} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }
);

export default MaterialsCraftingItem;

MaterialsCraftingItem.displayName = 'MaterialsCraftingItem';
