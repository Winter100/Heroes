import Column from "@/app/_components/layout/Column";
import AbilityRankHeader from "@/app/_components/home/characterInfoPanel/AbilityRankHeader";
import AbilityRankList from "@/app/_components/home/characterInfoPanel/AbilityRankList";

const CharacterInfoPanel = () => {
  return (
    <div className="h-full w-full gap-1 p-2 text-xs text-gray-300">
      <Column className="h-full w-full gap-1">
        <AbilityRankHeader />
        <AbilityRankList />
      </Column>
    </div>
  );
};

export default CharacterInfoPanel;
