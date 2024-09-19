import { ComponentProps } from "react";

interface AbilityItemProps extends ComponentProps<"div"> {
  abilityLabel: string;
  abilityValue: number | string;
  pStyle?: string;
}
const AbilityItem = ({
  className = "",
  abilityLabel = "",
  abilityValue = 0,
  pStyle = "",
}: AbilityItemProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <p className={`text-center ${pStyle}`}>{abilityLabel}</p>
      <p className="flex flex-1 justify-center">{abilityValue}</p>
    </div>
  );
};

export default AbilityItem;
