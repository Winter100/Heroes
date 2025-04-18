import clsx from 'clsx';
import React, { ComponentProps } from 'react';

const Tbody = ({ children, className, ...props }: ComponentProps<'tbody'>) => {
  return (
    <tbody className={clsx('', className)} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
