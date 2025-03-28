import { Suspense } from "react";
import Loading from "@/app/_components/common/Loading";
import BasicContainer from "@/app/_components/layout/BasicContainer";
import Column from "@/app/_components/layout/Column";
import RaidLimitSearchMenuBar from "@/app/_components/raid/searchBar/RaidLimitSearchMenuBar";
import RaidLimitUserTable from "@/app/_components/raid/userTable/RaidLimitUserTable";
// import CharacterSkillAndEquipment from "@/app/_components/raid/characterInfo/CharacterSkillAndEquipment";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BasicContainer>
        <Column className="h-full w-full gap-2 pt-20 text-xs">
          <RaidLimitSearchMenuBar />
          <RaidLimitUserTable />
          {/* <CharacterSkillAndEquipment /> */}
        </Column>
      </BasicContainer>
    </Suspense>
  );
};
export default Page;
