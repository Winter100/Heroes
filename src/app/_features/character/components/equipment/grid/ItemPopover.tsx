import ItemPrviewImage from '@/app/_components/iteminfo/info/ItemPrviewImage';
import ItemTooltip from '@/app/_components/tooltip/ItemTooltip';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ItemPreivewInfo from '../item/ItemPreivewInfo';

const ItemPopover = ({ ...item }: NewEquipmentType) => {
  return (
    <Popover>
      <PopoverTrigger className="h-full w-full">
        <div className="flex h-full w-full flex-col p-1 hover:bg-muted/70 sm:flex-row">
          <div className="mx-auto flex w-12 items-center justify-center">
            <ItemPrviewImage
              materials={item.item_name}
              slot={item.item_equipment_slot_name}
            />
          </div>
          <div className="flex w-full items-center gap-0.5 text-xs">
            <ItemPreivewInfo {...item} />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="dark w-[350px] p-1">
        <ItemTooltip isItemInfo={true} itemName={item.item_name} {...item} />
      </PopoverContent>
    </Popover>
  );
};

export default ItemPopover;
