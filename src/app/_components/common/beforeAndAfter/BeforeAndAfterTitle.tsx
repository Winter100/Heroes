import { ComponentProps } from 'react';

const BeforeAndAfterTitle = ({
  children,
  className,
  ...props
}: ComponentProps<'p'>) => {
  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      {children}
    </div>
  );
};

export default BeforeAndAfterTitle;
