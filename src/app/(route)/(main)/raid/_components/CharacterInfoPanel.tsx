import Column from "@/app/_components/layout/Column";
import AbilityRankHeader from "@/app/_components/home/characterInfoPanel/AbilityRankHeader";
import AbilityRankList from "@/app/_components/home/characterInfoPanel/AbilityRankList";

const CharacterInfoPanel = () => {
  return (
    <Column className="h-full w-full gap-1 text-xs">
      <AbilityRankHeader />
      <AbilityRankList />
    </Column>
  );
};

export default CharacterInfoPanel;
