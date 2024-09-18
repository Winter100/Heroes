import Row from "@/app/_components/layout/Row";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import CharacterDetailInfo from "./_components/CharacterDetailInfo";

export default function Home() {
  return (
    <div className="flex h-full max-w-screen-lg flex-col gap-1">
      <Row className="flex min-h-[430px] items-center justify-center">
        <CharacterInfoPanel />
      </Row>
      <Row className="h-full">
        <CharacterDetailInfo />
      </Row>
    </div>
  );
}
