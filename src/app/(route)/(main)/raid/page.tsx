import { Suspense } from "react";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import UserSkillAndEquipment from "@/app/_components/home/userDetailInfo/CharacterSkillAndEquipment";
import Loading from "@/app/_components/common/Loading";

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      }
    >
      <div className="h-full w-full flex-col">
        <div className="h-full w-full p-2">
          <CharacterInfoPanel />
        </div>
        <div className="h-full w-full p-2">
          <UserSkillAndEquipment />
        </div>
      </div>
    </Suspense>
  );
};
export default Home;
