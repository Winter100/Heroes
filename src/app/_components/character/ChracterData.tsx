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
    return <ErrorDisplay content="캐릭터를 조회해주세요" />;
  }
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay content="캐릭터 조회에 실패했습니다" />;
  }
  return (
    <>
      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="flex w-full max-w-[350px] flex-col gap-2">
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
      <RoundedContainer className="flex flex-1 bg-muted/50">
        <CharacterSkillAwakeningTable ocid={ocid || ""} />
      </RoundedContainer>
    </>
  );
};

export default ChracterData;
