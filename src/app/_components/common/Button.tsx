import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`h-full rounded-lg border border-borderColor transition ease-in-out hover:border-blue-300 hover:bg-background hover:text-gray-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
