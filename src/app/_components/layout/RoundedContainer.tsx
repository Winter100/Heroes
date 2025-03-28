import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ContainerProps extends ComponentProps<"div"> {}

const RoundedContainer = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={cn("rounded-md p-2", className)} {...props}>
      {children}
    </div>
  );
};

export default RoundedContainer;
