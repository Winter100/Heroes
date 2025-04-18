import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const RoundedContainer = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={cn('rounded-md p-2', className)} {...props}>
      {children}
    </div>
  );
};

export default RoundedContainer;
