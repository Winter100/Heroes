import { ComponentProps } from "react";
import Column from "../../layout/Column";
import clsx from "clsx";

interface EnchantDescriptionProps extends ComponentProps<"div"> {
  enchantEffects: {
    stat_name: string;
    stat_value: string;
  }[];
}
const EnchantEffects = ({
  enchantEffects,
  className,
}: EnchantDescriptionProps) => {
  return (
    <Column
      className={clsx(
        "flex-1 rounded-md border border-borderColor p-1 text-xs",
        className,
      )}
    >
      {enchantEffects?.map((option) => (
        <div
          className={"flex items-center gap-1 px-1"}
          key={option.stat_name + option.stat_value}
        >
          <span>• {option.stat_name}</span>
          <span>{option.stat_value}</span>
        </div>
      ))}
    </Column>
  );
};

export default EnchantEffects;
