import { Suspense } from "react";
import Loading from "@/app/_components/common/Loading";
import BasicContainer from "@/app/_components/layout/BasicContainer";
import Column from "@/app/_components/layout/Column";
import RaidLimitSearchMenuBar from "@/app/_components/raid/searchBar/RaidLimitSearchMenuBar";
import RaidLimitUserTable from "@/app/_components/raid/userTable/RaidLimitUserTable";
import CharacterSkillAndEquipment from "@/app/_components/raid/characterInfo/CharacterSkillAndEquipment";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BasicContainer>
        <Column className="h-full w-full gap-2 text-xs">
          <RaidLimitSearchMenuBar />
          <RaidLimitUserTable />
          <CharacterSkillAndEquipment />
        </Column>
      </BasicContainer>
    </Suspense>
  );
};
export default Page;
// import { Suspense } from "react";
// import CharacterInfoPanel from "./_components/CharacterInfoPanel";
// import UserSkillAndEquipment from "@/app/_components/raid/userDetailInfo/CharacterSkillAndEquipment";
// import Loading from "@/app/_components/common/Loading";

// const Home = () => {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-full w-full items-center justify-center">
//           <Loading />
//         </div>
//       }
//     >
//       <div className="h-full w-full flex-col">
//         <div className="h-full w-full p-2">
//           <CharacterInfoPanel />
//         </div>
//         <div className="h-full w-full p-2">
//           <UserSkillAndEquipment />
//         </div>
//       </div>
//     </Suspense>
//   );
// };
// export default Home;
