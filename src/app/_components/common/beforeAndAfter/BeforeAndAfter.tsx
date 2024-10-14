import { ComponentProps } from "react";
import BeforeAndAfterTitle from "./BeforeAndAfterTitle";

import After from "./After";
import Before from "./Before";
import BeforeAndAfterContent from "./BeforeAndAfterContent";

interface BeforeAndAfter extends ComponentProps<"div"> {}

const BeforeAndAfter = ({ children, className, ...props }: BeforeAndAfter) => {
  return (
    <div
      // className={`text-xs ${className}`}
      className={`flex h-full flex-col items-center justify-center text-xs ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BeforeAndAfter;

BeforeAndAfter.Title = BeforeAndAfterTitle;
BeforeAndAfter.Content = BeforeAndAfterContent;
BeforeAndAfter.After = After;
BeforeAndAfter.Before = Before;
