import Row from "@/app/_components/layout/Row";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";
// import CharacterDetailInfo from "./_components/CharacterDetailInfo";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center gap-1">
      <Row className="min-h-[500px]">
        <CharacterInfoPanel />
      </Row>
      <Row className="flex-1">{/* <CharacterDetailInfo /> */}</Row>
    </div>
  );
}
