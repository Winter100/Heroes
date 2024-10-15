import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import UserSkillAndEquipment from "@/app/_components/home/userDetailInfo/CharacterSkillAndEquipment";

const Home = () => {
  return (
    <div className="h-full w-full flex-col">
      <div className="h-full w-full p-2">
        <CharacterInfoPanel />
      </div>
      <div className="h-full w-full p-2">
        <UserSkillAndEquipment />
      </div>
    </div>
  );
};
export default Home;
