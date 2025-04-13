import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

const Tr = forwardRef<HTMLTableRowElement, ComponentProps<'tr'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <tr ref={ref} className={clsx('', className)} {...props}>
        {children}
      </tr>
    );
  }
);

Tr.displayName = 'Tr';

export default Tr;
