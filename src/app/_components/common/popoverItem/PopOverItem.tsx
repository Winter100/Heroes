import { getItemOrMaterialsRating } from '@/app/_features/iteminfo/utils/getItemRating';
import Item from '../item/Item';
import PopOverImage from './PopOverImage';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface PopOverItemProps extends ComponentProps<'div'> {
  category: string;
  itemName: string;
  isColorName?: boolean;
  description?: string;
}

const PopOverItem = ({
  category,
  itemName,
  isColorName = false,
  description,
  className,
}: PopOverItemProps) => {
  const type = isColorName
    ? getItemOrMaterialsRating(category, itemName)
    : null;

  return (
    <div className={cn('flex flex-row items-center gap-1 text-sm', className)}>
      <PopOverImage
        category={category}
        item_name={itemName}
        isRatingBorder={true}
      />
      <div className="flex flex-col">
        <Item.Title type={type}>{itemName}</Item.Title>
        {description && <div className="text-xs">{description}</div>}
      </div>
    </div>
  );
};

export default PopOverItem;
