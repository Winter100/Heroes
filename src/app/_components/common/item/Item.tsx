import clsx from 'clsx';
import { ComponentProps } from 'react';
import ItemImage from './ItemImage';
import ItemSubDescription from './ItemSubDescription';
import ItemTitle from './ItemTitle';
import ItemDescription from './ItemDescription';
import ItemContent from './ItemContent';
import ItemBorder from './ItemBorder';
import ItemShape from './ItemShape';
import ItemSelector from './ItemSelector';

const Item = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={clsx('rounded-md p-2', className)} {...props}>
      {children}
    </div>
  );
};

export default Item;

Item.Image = ItemImage;
Item.Title = ItemTitle;
Item.Shape = ItemShape;
Item.Content = ItemContent;
Item.Description = ItemDescription;
Item.SubDescription = ItemSubDescription;
Item.Border = ItemBorder;
Item.Selector = ItemSelector;
