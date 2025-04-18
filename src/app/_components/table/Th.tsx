import clsx from 'clsx';
import { ComponentProps } from 'react';

const Th = ({ children, className, ...props }: ComponentProps<'th'>) => {
  return (
    <th className={clsx('p-2 align-middle', className)} {...props}>
      {children}
    </th>
  );
};

export default Th;
