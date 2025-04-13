import { ComponentProps } from 'react';

const BeforeAndAfterContent = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={`flex w-full items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BeforeAndAfterContent;
