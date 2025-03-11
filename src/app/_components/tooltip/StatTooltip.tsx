import { statDescripiton } from "@/app/_constant/stats/statDescription";
import InfoTooltip from "../common/tooltip/InfoTooltip";
import StatTooltipItem from "./content/StatTooltipItem";

interface StatTooltipProps {
  statName: string;
}

const StatTooltip = ({ statName }: StatTooltipProps) => {
  const statData = statDescripiton?.find((stat) => {
    if (stat.stat_name === "공격력 제한 해제") {
      return statName.includes("해제");
    }
    return stat.stat_name === statName;
  });
  // const statData = statDescripiton?.find((stat) => stat.stat_name === statName);

  if (!statData) return null;

  return (
    <InfoTooltip itemName={statName}>
      <StatTooltipItem
        {...(statData || { stat_name: "", stat_descripiton: "" })}
      />
    </InfoTooltip>
  );
};

export default StatTooltip;
