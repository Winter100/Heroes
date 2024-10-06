import Row from "@/app/_components/layout/Row";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import CharacterDetailInfo from "./_components/CharacterDetailInfo";
import Section from "@/app/_components/layout/Section";

export default function Home() {
  return (
    <>
      <Section className="flex h-full max-h-[450px] w-full flex-1 items-center justify-center">
        <Row className="h-full w-full">
          <CharacterInfoPanel />
        </Row>
      </Section>
      <Section className="h-full flex-1">
        <Row className="h-full">
          <CharacterDetailInfo />
        </Row>
      </Section>
    </>
  );
}
