import clsx from "clsx";
import { ComponentProps } from "react";

interface ScreenContainer extends ComponentProps<"div"> {}

const ScreenContainer = ({ className, ...props }: ScreenContainer) => {
  return (
    <div
      className={clsx("mx-auto w-full max-w-screen-xl", className)}
      {...props}
    ></div>
  );
};

export default ScreenContainer;
