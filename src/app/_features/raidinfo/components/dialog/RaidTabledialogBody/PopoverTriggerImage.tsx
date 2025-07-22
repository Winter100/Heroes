import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { Drop_items } from '../../../types';
import { getImageByFilter } from '../../../utils/getImageByFilter';

interface PopoverTriggerImageProps {
  drop: Drop_items;
}

const PopoverTriggerImage = ({ drop }: PopoverTriggerImageProps) => {
  const itemFilter = drop.item_filter;
  const itemName = drop.item_name;
  const src = getImageByFilter(itemFilter, itemName);
  return (
    <>
      <ImageIcon className="h-5 w-5" src={src} alt="item" />
      <div className="flex flex-col">
        <div className="text-start">{drop.item_name}</div>
        {drop.item_description && (
          <div className="flex flex-col items-center text-[11px]">
            {drop.item_description?.map((item) => (
              <div className="w-full text-start" key={item}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PopoverTriggerImage;
