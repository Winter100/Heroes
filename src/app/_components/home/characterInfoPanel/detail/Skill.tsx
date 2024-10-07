import { ComponentProps } from "react";
import { useCharacterStore } from "@/app/_store/characterStore";

interface SkillProps extends ComponentProps<"ul"> {}

const Skill = ({ ...props }: SkillProps) => {
  const skill = useCharacterStore((state) => state.selectedCharacter?.skill);
  return (
    <ul
      {...props}
      className="grid h-full grid-cols-2 gap-1 p-2 text-[8px] text-white sm:text-xs"
    >
      {skill?.map((s) => (
        <li
          className="flex flex-1 flex-col items-center justify-center gap-1 truncate rounded-lg border border-gray-600 hover:text-blue-300 sm:flex-col md:flex-1"
          key={s.skill_name}
        >
          <p className="flex items-center justify-center">{s.skill_name}</p>
          <p className="flex items-center justify-center">{s.item_name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skill;
