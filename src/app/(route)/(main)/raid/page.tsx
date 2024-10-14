import CharacterInfoPanel from "./_components/CharacterInfoPanel";
// import CharacterDetailInfo from "./_components/CharacterDetailInfo";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="w-full">
        <CharacterInfoPanel />
      </div>
      {/* <div className="h-full w-full sm:min-h-[650px]">
        <CharacterDetailInfo />
      </div> */}
    </div>
  );
}
