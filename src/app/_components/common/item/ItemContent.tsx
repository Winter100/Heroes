import clsx from 'clsx';
import { ComponentProps } from 'react';

const ItemContent = ({ className, ...props }: ComponentProps<'span'>) => {
  return (
    <span
      className={clsx('flex-wrap whitespace-pre-line', className)}
      {...props}
    ></span>
  );
};

export default ItemContent;
