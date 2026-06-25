import Image from 'next/image';
import Item from '@/app/_components/common/item/Item';
import { getImageByName } from '@/app/_utils/get/getImageByName';

// Todo
// 스킬 설명 DB에서 가져오기
const SkillDescription = ({
  skillName,
  jobName,
}: {
  skillName: string;
  jobName: string;
}) => {
  return (
    <div className="flex select-none flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative flex h-8 w-8 items-center rounded-md">
          <Image
            fill
            src={getImageByName(skillName)}
            alt={skillName}
            className="absolute rounded-md object-contain"
          />
        </div>
        <div className="text-sm">{skillName}</div>
      </div>
      <Item.Border />
      <div className="whitespace-pre-wrap text-xs text-gray-400">
        {/* {getSkillDescription(skillName, jobName)} */}
      </div>
    </div>
  );
};

export default SkillDescription;
