import { memo } from 'react';
import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import TooltipImage from '@/app/_components/common/tooltip/TooltipImage';
import Item from '@/app/_components/common/item/Item';
import CraftingQuantity from './CraftingQuantity';
import ItemTooltipByType from '@/app/_components/tooltip/ItemTooltipByType';
import { MaterialsCraftingItemProps } from '../../types';
import { getItemRating, getMaterialsRating } from '../../utils/getItemRating';

const MaterialsCraftingItem = memo(
  ({ item_name, item_quantity, category }: MaterialsCraftingItemProps) => {
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
                  <Item.Title
                    type={
                      getItemRating(item_name) ||
                      getMaterialsRating(item_name) ||
                      '일반'
                    }
                  >
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
