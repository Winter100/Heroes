import { ComponentProps } from "react";

interface ModalCloseBtnProps extends ComponentProps<"div"> {}

const ModalCloseBtn = ({ children, ...props }: ModalCloseBtnProps) => {
  return (
    <div className="flex items-center justify-center" {...props}>
      {children}
    </div>
  );
};

export default ModalCloseBtn;
