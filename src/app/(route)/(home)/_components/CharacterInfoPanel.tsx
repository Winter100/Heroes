import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import AbilityRankHeader from "@/app/_components/home/characterInfoPanel/AbilityRankHeader";
import AbilityRankList from "@/app/_components/home/characterInfoPanel/AbilityRankList";

const CharacterInfoPanel = () => {
  return (
    <Section className="h-full w-full gap-1 text-xs text-gray-200">
      <Column className="flex h-full w-full gap-1">
        <AbilityRankHeader />
        <Column className="h-full">
          <AbilityRankList />
        </Column>
      </Column>
    </Section>
  );
};

export default CharacterInfoPanel;
