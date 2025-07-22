import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import { extractValue } from '../../utils/extractValue';
import { SkillPopoverProps } from '../../types';
import SkillDescription from './SkillDescription';
import { getImageByName } from '@/app/_utils/get/getImageByName';

const SkillPopover = ({ jobName, skill: s }: SkillPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger className="h-full w-full">
        <div className="flex items-center gap-2 p-2">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="rounded-sm"
              src={getImageByName(s.skill_name)}
              width={25}
              height={25}
              alt="skill"
            />
          </div>
          <div className="w-full text-start">{s.skill_name}</div>
          <div className="w-12">{extractValue(s.item_name)}</div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="dark w-full max-w-[350px]">
        <SkillDescription jobName={jobName} skillName={s.skill_name} />
      </PopoverContent>
    </Popover>
  );
};

export default SkillPopover;
