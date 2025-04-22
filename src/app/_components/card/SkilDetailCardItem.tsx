import { skillDescription } from '@/app/_constant/character/skill/skill';
import { getImageByName } from '@/app/_utils/getImageByName';
import Image from 'next/image';
import Item from '../common/item/Item';

interface SkilDetailCardItemProps {
  skillName: string;
  jobName: string;
}

const SkilDetailCardItem = ({
  skillName,
  jobName,
}: SkilDetailCardItemProps) => {
  const src = getImageByName(skillName);
  const skills = skillDescription[jobName] || [];
  const effect = skills?.find((s) => s.name === skillName.trim())?.effect;
  // const skills = Object.values(skillDescription).flat();
  // const effect = skills.find((s) => s.name === skillName)?.effect;
  return (
    <div className="flex select-none flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative flex h-8 w-8 items-center rounded-md">
          <Image
            fill
            src={src}
            alt={skillName}
            className="absolute rounded-md object-contain"
          />
        </div>
        <div className="text-sm">{skillName}</div>
      </div>
      <Item.Border />
      <div className="whitespace-pre-wrap text-xs text-gray-400">{effect}</div>
    </div>
  );
};

export default SkilDetailCardItem;
