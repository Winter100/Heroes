import clsx from 'clsx';
import { ComponentProps, memo } from 'react';

const ItemBorder = memo(({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={clsx('h-0.5 bg-gray-800/80', className)} {...props}></div>
  );
});

export default ItemBorder;

ItemBorder.displayName = 'ItemBorder';
