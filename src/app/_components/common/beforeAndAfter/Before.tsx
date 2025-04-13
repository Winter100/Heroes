import { ComponentProps } from 'react';

const Before = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={`h-full w-full text-[11px] sm:text-xs ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Before;
