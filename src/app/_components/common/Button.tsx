import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `flex h-full w-full items-center justify-center border border-borderColor transition ease-in-out hover:border-blue-300 hover:text-white`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
