import { ComponentProps } from "react";
import Column from "../../layout/Column";
import clsx from "clsx";

interface EnchantDescriptionProps extends ComponentProps<"div"> {
  enchantEffects: {
    stat_name: string;
    stat_value: string;
  }[];
  effectColor?: string;
}
const EnchantEffects = ({
  enchantEffects,
  className,
  effectColor,
}: EnchantDescriptionProps) => {
  return (
    <Column
      className={clsx(
        "flex-1 rounded-md border border-gray-500/30 px-1 py-2 text-xs",
        className,
      )}
    >
      {enchantEffects?.map((option) => (
        <div
          className={"flex items-center gap-1 px-1"}
          key={option.stat_name + option.stat_value}
        >
          <span className="text-gray-600/50">•</span>
          <span className={clsx("", effectColor)}>{option.stat_name}</span>
          <span className={clsx("", effectColor)}>{option.stat_value}</span>
        </div>
      ))}
    </Column>
  );
};

export default EnchantEffects;
