import clsx from 'clsx';
import { ComponentProps } from 'react';

const Td = ({ children, className, ...props }: ComponentProps<'td'>) => {
  return (
    <td className={clsx('p-2 align-middle', className)} {...props}>
      {children}
    </td>
  );
};

export default Td;
