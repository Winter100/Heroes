import ItemPrviewImage from '@/app/_components/iteminfo/info/ItemPrviewImage';
import ItemTooltip from '@/app/_components/tooltip/ItemTooltip';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const ItemPopover = ({ ...item }: NewEquipmentType) => {
  return (
    <Popover>
      <PopoverTrigger className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center hover:bg-muted/70">
          <ItemPrviewImage
            materials={item.item_name}
            slot={item.item_equipment_slot_name}
          />
          <div className="text-center text-xs">{item.item_name}</div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="dark w-[350px] p-1">
        <ItemTooltip isItemInfo={true} itemName={item.item_name} {...item} />
      </PopoverContent>
    </Popover>
  );
};

export default ItemPopover;
