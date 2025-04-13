import clsx from 'clsx';
import { ComponentProps } from 'react';

const ItemSubDescription = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={clsx(
        'rounded-sm border border-borderColor/50 font-sans text-[11px]',
        className
      )}
      {...props}
    ></div>
  );
};

export default ItemSubDescription;
