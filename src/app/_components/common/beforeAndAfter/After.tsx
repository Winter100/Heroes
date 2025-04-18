import { ComponentProps, memo } from 'react';

const After = memo(
  ({ children, className, ...props }: ComponentProps<'div'>) => {
    return (
      <div
        className={`flex w-full items-center justify-center text-[11px] sm:text-xs ${className} `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default After;

After.displayName = 'After';
