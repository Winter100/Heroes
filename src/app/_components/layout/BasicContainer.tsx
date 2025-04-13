import clsx from 'clsx';
import { ComponentProps } from 'react';

const BasicContainer = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={clsx('flex flex-col rounded-lg p-2 shadow-sm', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default BasicContainer;
