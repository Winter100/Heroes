import { NewEquipmentType } from '@/app/_type/equipmentType';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ItemPreivewInfo from '../item/ItemPreivewInfo';
import ItemTooltip from '@/app/_components/tooltip/ItemTooltip';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import { getTooltipImageSrc } from '@/app/_utils/get/getTooltipImageSrc';

const ItemPopover = ({ ...item }: NewEquipmentType) => {
  const src = getTooltipImageSrc(item.item_name, item.item_equipment_slot_name);

  return (
    <Popover>
      <PopoverTrigger className="h-full w-full">
        <div className="flex h-full w-full flex-col p-1 hover:bg-muted/70 sm:flex-row">
          <div className="mx-auto flex w-12 items-center justify-center">
            <ImageIconUseBorder
              className="h-9 w-9"
              src={src}
              itemName={item.item_name}
              isRatingBorder={true}
            />
          </div>
          <div className="flex w-full items-center gap-0.5 text-xs">
            <ItemPreivewInfo {...item} />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="dark w-[350px] p-1">
        <ItemTooltip itemName={item.item_name} {...item} />
      </PopoverContent>
    </Popover>
  );
};

export default ItemPopover;
