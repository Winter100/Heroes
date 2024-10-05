import Row from "@/app/_components/layout/Row";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import CharacterDetailInfo from "./_components/CharacterDetailInfo";

export default function Home() {
  return (
    <>
      <Row className="flex min-h-[430px] w-full items-center justify-center">
        <CharacterInfoPanel />
      </Row>
      <Row className="h-full">
        <CharacterDetailInfo />
      </Row>
    </>
  );
}
