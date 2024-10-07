import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import CharacterDetailInfo from "./_components/CharacterDetailInfo";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="w-full flex-1">
        <CharacterInfoPanel />
      </div>
      <div className="w-full flex-1">
        <CharacterDetailInfo />
      </div>
    </div>
  );
}
