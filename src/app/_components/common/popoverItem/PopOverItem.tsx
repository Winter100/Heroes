import { getItemOrMaterialsRating } from '@/app/_features/iteminfo/utils/getItemRating';
import Item from '../item/Item';
import PopOverImage from './PopOverImage';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface PopOverItemProps extends ComponentProps<'div'> {
  category: string;
  itemName: string;
  isColorName?: boolean;
}

const PopOverItem = ({
  category,
  itemName,
  isColorName = false,
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
      <Item.Title type={type}>{itemName}</Item.Title>
    </div>
  );
};

export default PopOverItem;
