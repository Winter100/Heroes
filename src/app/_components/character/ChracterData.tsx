"use client";

import { useSearchParams } from "next/navigation";
import { useOcid } from "@/app/_hooks/useOcid/useOcid";
import CharacterBasicInfo from "@/app/_components/character/CharacterBasicInfo";
import CharacterStats from "@/app/_components/character/CharacterStats";
import RoundedContainer from "../layout/RoundedContainer";
import Loading from "../common/Loading";
import CharacterEquipment from "./CharacterEquipment";
import ErrorDisplay from "../common/error/ErrorDisplay";
import CharacterSkillAwakeningTable from "./CharacterSkillAwakeningTable";

const ChracterData = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const { data: ocid, isLoading, error } = useOcid(name);

  if (!name) {
    return <ErrorDisplay content="캐릭터 이름을 입력해주세요." />;
  }
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorDisplay
        content={
          <div className="text-center text-red-100">
            캐릭터 조회에 실패했습니다.
          </div>
        }
      />
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-1 flex-col gap-2 px-3 sm:flex-row sm:px-0">
        <div className="flex w-full flex-col gap-2 md:max-w-[350px]">
          <RoundedContainer className="flex max-h-52 flex-1 flex-col gap-2 bg-muted/50">
            <CharacterBasicInfo ocid={ocid || ""} />
          </RoundedContainer>
          <RoundedContainer className="flex flex-1 flex-col gap-2 bg-muted/50">
            <CharacterStats ocid={ocid || ""} />
          </RoundedContainer>
        </div>
        <RoundedContainer className="flex w-full bg-muted/50">
          <CharacterEquipment ocid={ocid || ""} />
        </RoundedContainer>
      </div>
      <div className="flex w-full flex-1 flex-col px-3 md:px-0">
        <RoundedContainer className="flex w-full flex-1 justify-center bg-muted/50 sm:justify-start">
          <CharacterSkillAwakeningTable ocid={ocid || ""} />
        </RoundedContainer>
      </div>
    </div>
  );
};

export default ChracterData;
