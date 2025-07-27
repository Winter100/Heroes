import CachColors from './CachColors';
import { CachItemsType } from '@/app/_type/equipmentType';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import { getImageByName } from '@/app/_utils/get/getImageByName';

const CachItem = ({ ...item }: CachItemsType) => {
  const src = getImageByName(item.item_name, item.item_equipment_slot_name);
  return (
    <div className="flex h-full w-full flex-col items-center rounded-md border border-border">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col justify-center gap-1 p-2 px-1 hover:bg-muted/70">
          <div className="flex w-full items-center gap-1">
            <div className="hidden lg:block">
              <ImageIconUseBorder
                className="h-9 w-9"
                src={src}
                itemName={item.item_name}
                isRatingBorder={true}
              />
            </div>
            <div
              className="truncate text-center text-xs"
              title={item.item_name}
            >
              {item.item_name}
            </div>
          </div>
          <CachColors
            isWearing={!item.item_name.includes('미착용')}
            colors={item.item_option.cash_item_color}
          />
        </div>
      </div>
    </div>
  );
};

export default CachItem;
