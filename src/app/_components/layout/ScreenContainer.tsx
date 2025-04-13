import clsx from 'clsx';
import { ComponentProps } from 'react';

const ScreenContainer = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={clsx('mx-auto w-full max-w-screen-xl', className)}
      {...props}
    ></div>
  );
};

export default ScreenContainer;
