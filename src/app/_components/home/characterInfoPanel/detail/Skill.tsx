// import { ComponentProps } from "react";
// import { useCharacterStore } from "@/app/_store/characterStore";

// interface SkillProps extends ComponentProps<"ul"> {}

// const Skill = ({ ...props }: SkillProps) => {
//   const skill = useCharacterStore((state) => state.selectedCharacter?.skill);

//   return (
//     <ul {...props} className="grid h-full grid-cols-2 gap-1 p-2 text-white">
//       {skill?.map((s, index) => (
//         <li
//           className="animate-fadeIn flex flex-1 translate-y-4 transform flex-col items-center justify-center rounded-lg border border-gray-600 opacity-0 hover:text-blue-300"
//           key={s.skill_name}
//           style={{ animationDelay: `${index * 20}ms` }}
//         >
//           <p className="flex min-w-40 items-center justify-center">
//             {s.skill_name}
//           </p>
//           <p className="flex items-center justify-center">{s.item_name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Skill;
import { ComponentProps } from "react";
import { useCharacterStore } from "@/app/_store/characterStore";

interface SkillProps extends ComponentProps<"ul"> {}

const Skill = ({ ...props }: SkillProps) => {
  const skill = useCharacterStore((state) => state.selectedCharacter?.skill);
  return (
    <ul {...props} className="grid h-full grid-cols-2 gap-1 p-2 text-white">
      {skill?.map((s) => (
        <li
          className="flex flex-1 flex-col items-center justify-center rounded-lg border border-gray-600 hover:text-blue-300"
          key={s.skill_name}
        >
          <p className="flex min-w-40 items-center justify-center">
            {s.skill_name}
          </p>
          <p className="flex items-center justify-center">{s.item_name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skill;
