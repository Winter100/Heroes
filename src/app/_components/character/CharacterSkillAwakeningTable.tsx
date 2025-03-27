"use client";

import Loading from "../common/Loading";
import { useBasic } from "@/app/_hooks/useBasic";
import CharacterSkillAwakening from "./CharacterSkillAwakening";

export const extractValue = (itemName: string): string | null => {
  const match = itemName.match(/\d+\D*$/);
  return match ? match[0] : null;
};

const extractNumber = (itemName: string): number | null => {
  const match = itemName.match(/\d+/);
  if (match && match[0]) {
    return parseInt(match[0], 10);
  }
  return null;
};
const CharacterSkillAwakeningTable = ({ ocid }: { ocid: string }) => {
  const { basic, isLoading } = useBasic(ocid || "");

  if (isLoading) {
    return <Loading />;
  }

  const awakening = basic?.skill_awakening || [];
  const jobName = basic?.character_class_name;

  return (
    <div className="grid h-full w-full md:grid-cols-3 lg:grid-cols-5">
      <div>
        <CharacterSkillAwakening
          jobName={jobName}
          itemName="각성의 돌: 대미지 증가"
          title="대미지 증가"
          skillData={awakening
            .filter(
              (s) =>
                s.item_name.includes("대미지 증가") &&
                !s.item_name.includes("부분 파괴 대미지 증가"),
            )
            .sort((a, b) => {
              const numA = extractNumber(a.item_name);
              const numB = extractNumber(b.item_name);
              if (numA === null || numB === null) return 0;
              return numB - numA;
            })}
        />
      </div>
      <div>
        <CharacterSkillAwakening
          itemName="각성의 돌: SP소모 감소"
          title="SP소모 감소"
          jobName={jobName}
          skillData={awakening
            .filter((s) => s.item_name.includes("SP소모 감소"))
            .sort((a, b) => {
              const numA = extractNumber(a.item_name);
              const numB = extractNumber(b.item_name);
              if (numA === null || numB === null) return 0;
              return numB - numA;
            })}
        />
      </div>
      <div>
        <CharacterSkillAwakening
          itemName="각성의 돌: 재사용시간 감소"
          title="재사용시간(대) 감소"
          jobName={jobName}
          skillData={awakening
            .filter((s) => s.item_name.includes("재사용시간"))
            .sort((a, b) => {
              const numA = extractNumber(a.item_name);
              const numB = extractNumber(b.item_name);
              if (numA === null || numB === null) return 0;
              return numB - numA;
            })}
        />
      </div>
      <div>
        <CharacterSkillAwakening
          itemName="각성의 돌: 스태미나 소모 감소"
          title="스태미나 소모 감소"
          jobName={jobName}
          skillData={awakening
            .filter((s) => s.item_name.includes("스태미나 소모"))
            .sort((a, b) => {
              const numA = extractNumber(a.item_name);
              const numB = extractNumber(b.item_name);
              if (numA === null || numB === null) return 0;
              return numB - numA;
            })}
        />
      </div>
      <div>
        <CharacterSkillAwakening
          itemName="각성의 돌: 부분 파괴 대미지"
          title="부분 파괴 대미지"
          jobName={jobName}
          skillData={awakening
            .filter((s) => s.item_name.includes("부분 파괴 대미지"))
            .sort((a, b) => {
              const numA = extractNumber(a.item_name);
              const numB = extractNumber(b.item_name);
              if (numA === null || numB === null) return 0;
              return numB - numA;
            })}
        />
      </div>
    </div>
  );
};

export default CharacterSkillAwakeningTable;
