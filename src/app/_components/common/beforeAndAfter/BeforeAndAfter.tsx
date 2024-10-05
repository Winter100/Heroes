import { ComponentProps } from "react";
import BeforeAndAfterTitle from "./BeforeAndAfterTitle";

import After from "./After";
import Before from "./Before";
import BeforeAndAfterContent from "./BeforeAndAfterContent";

interface BeforeAndAfter extends ComponentProps<"div"> {}

// 주스탠드로 상태 관리하기??
const BeforeAndAfter = ({ children, className, ...props }: BeforeAndAfter) => {
  return (
    <div
      className={`flex h-full w-full flex-1 flex-col items-center justify-center text-xs ${className}`}
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
