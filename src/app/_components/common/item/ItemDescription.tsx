import clsx from 'clsx';
import { ComponentProps } from 'react';

const ItemDescription = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <span className={clsx('p-1 text-xs text-inherit', className)} {...props}>
      {children}
    </span>
  );
};

export default ItemDescription;
