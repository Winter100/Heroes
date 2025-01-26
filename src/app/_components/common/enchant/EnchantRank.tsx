import { ComponentProps } from "react";
import clsx from "clsx";

interface EnchantTitleProps extends ComponentProps<"div"> {
  enchantRank?: string;
}
const EnchantRank = ({ enchantRank, className }: EnchantTitleProps) => {
  return <div className={clsx("", className)}>{enchantRank}</div>;
};

export default EnchantRank;
