import { materialsMap } from '@/app/_constant/items/item_map';
import { Item_Rating } from '@/app/_type/infoInfoType';
import clsx from 'clsx';
import { ComponentProps, memo } from 'react';

interface ItemTitleProps extends ComponentProps<'div'> {
  type: Item_Rating;
  item_name?: string;
}

const ItemTitle = memo(
  ({
    children,
    className,
    item_name,
    type = '일반',
    ...props
  }: ItemTitleProps) => {
    const materialsRating = materialsMap?.get(item_name || '')?.item_rating;

    const finalType = (materialsRating || type) as ItemTitleProps['type'];

    const colorClass = {
      ['']: 'text-gray-400',
      일반: 'text-white',
      초급: 'text-green-400',
      중급: 'text-blue-300',
      고급: 'text-purple-500',
      레어: 'text-orange-300',
      전설: 'text-pink-400',
    }[finalType || ''];

    return (
      <div className={clsx(colorClass, className)} {...props}>
        {children}
      </div>
    );
  }
);

export default ItemTitle;

ItemTitle.displayName = 'ItemTitle';
