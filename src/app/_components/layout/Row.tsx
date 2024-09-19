import { ComponentProps } from 'react';

interface RowProps extends ComponentProps<'div'> {}
const Row = ({ children, className, ...props }: RowProps) => {
  return (
    <div className={`flex flex-row ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Row;
