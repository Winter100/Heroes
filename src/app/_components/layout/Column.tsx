import { ComponentProps } from 'react';

interface ColumnProps extends ComponentProps<'div'> {}
const Column = ({ children, className, ...props }: ColumnProps) => {
  return (
    <div className={`flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Column;
