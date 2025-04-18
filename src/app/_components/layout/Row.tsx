import clsx from 'clsx';
import { ComponentProps } from 'react';

const Row = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={clsx('flex flex-row', className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
