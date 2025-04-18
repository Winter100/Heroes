import { ComponentProps } from 'react';

const ModalOpenBtn = ({ children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className="flex items-center justify-center" {...props}>
      {children}
    </div>
  );
};

export default ModalOpenBtn;
