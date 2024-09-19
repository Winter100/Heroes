import { MonstersType } from "@/app/_constant/raidList";
import { limitCalculator } from "../utils/limitCalculator";
import { useRankStore } from "@/app/_store/rankStore";
import { useCharacterStore } from "@/app/_store/characterStore";

const LimitStat = (props: {
  selectedBoss: MonstersType;
  stat_name: string;
  stat_value: string;
  characterName: string;
}) => {
  const selectedBoss = props.selectedBoss;
  const statName = props.stat_name;
  const statValue = props.stat_value;
  const characterName = props.characterName;

  const rankTitleList = useRankStore((state) => state?.rankTitleList);
  const isLimit = rankTitleList.find((t) => t.stat_name === "해제")?.isView;

  const limitValue = useCharacterStore((state) => {
    if (isLimit) {
      return (
        state?.characters
          .find((c) => c?.name === characterName)
          ?.stat.find((i) => i.stat_name === "해제")?.stat_value ?? "0"
      );
    }
    return "0";
  });

  const stat = limitCalculator(selectedBoss, statName, statValue, limitValue);

  return (
    <>
      {stat !== undefined && (
        <span
          className={`block text-center text-[10px] ${Number(stat) >= 0 ? "text-green-300" : "text-red-300"} `}
        >
          {stat !== null && stat >= 0 ? `+${stat}` : stat}
        </span>
      )}
    </>
  );
};

export default LimitStat;
