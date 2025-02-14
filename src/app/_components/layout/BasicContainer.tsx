import clsx from "clsx";
import { ComponentProps } from "react";

interface BasicContaienr extends ComponentProps<"div"> {}
const BasicContainer = ({ children, className, ...props }: BasicContaienr) => {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-lg p-2 shadow-sm",
        // "flex h-full w-full flex-col rounded-lg p-2 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BasicContainer;
