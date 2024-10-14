import { ComponentProps } from "react";

interface ModalOpenBtnProps extends ComponentProps<"div"> {}

const ModalOpenBtn = ({ children, ...props }: ModalOpenBtnProps) => {
  return (
    <div className="flex items-center justify-center" {...props}>
      {children}
    </div>
  );
};

export default ModalOpenBtn;
