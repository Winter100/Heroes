import clsx from 'clsx';
import { ComponentProps } from 'react';

const Column = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  );
};

export default Column;
