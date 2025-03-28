import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import Image from "next/image";
import { getImageByName } from "@/app/_utils/getImageByName";

const getSkillStoneName = (itemName: string) => {
  if (itemName.includes("각성의 돌: 대미지 증가"))
    return "각성의 돌: 대미지 증가";
  if (itemName.includes("각성의 돌: SP소모 감소"))
    return "각성의 돌: SP소모 감소";
  if (
    itemName.includes("각성의 돌: 재사용시간 감소") ||
    "각성의 돌: 재사용시간 대 감소"
  )
    return "각성의 돌: 재사용시간 감소";
  if (itemName.includes("각성의 돌: 스태미나 소모 감소"))
    return "각성의 돌: 스태미나 소모 감소";
  if (itemName.includes("각성의 돌: 부분 파괴 대미지"))
    return "각성의 돌: 부분 파괴 대미지";

  return "";
};

interface SkillCardProps extends ComponentProps<"div"> {
  itemName: string;
  skillName: string;
}

const SkillCard = ({
  itemName,
  skillName,
  className,
  ...props
}: SkillCardProps) => {
  const stoneName = getSkillStoneName(itemName);
  const skillSrc = getImageByName(skillName);
  const stoneSrc = getImageByName(stoneName);
  return (
    <div className={cn("", className)} {...props}>
      <div className="flex items-center gap-2">
        <div className="relative flex h-8 w-8 items-center rounded-md">
          <Image
            fill
            src={skillSrc}
            alt={skillName}
            className="absolute rounded-md object-contain"
          />
        </div>
        <div className="flex flex-col text-start">
          <span className="text-xs text-white">{skillName}</span>
          <div className="clear-start flex items-center gap-1 text-[11px]">
            <span>
              <Image
                className="rounded-full"
                src={stoneSrc}
                width={15}
                height={15}
                alt="s"
              />
            </span>
            <span>{itemName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
