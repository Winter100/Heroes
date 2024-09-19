import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg border text-black transition ease-in-out hover:border-black hover:bg-gray-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
