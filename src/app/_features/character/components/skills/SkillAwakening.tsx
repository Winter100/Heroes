import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SkillAwakeningProps } from '../../types';
import SkillPopover from './SkillPopover';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import Image from 'next/image';

const SkillAwakening = ({
  itemName,
  title,
  jobName,
  skillData = [],
}: SkillAwakeningProps) => {
  return (
    <Table className="rounded-md bg-muted/50">
      <TableHeader>
        <TableRow>
          <TableHead className="w-full md:w-1/5">
            <div className="flex h-full w-full cursor-default items-center justify-center gap-2">
              <Image
                className="rounded-full"
                src={getImageByName(itemName)}
                width={23}
                height={23}
                alt="S"
              />
              <span className="text-sm">{title}</span>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skillData.map((s) => (
          <TableRow key={s.skill_name}>
            <TableCell className="p-0.5 text-xs">
              <SkillPopover jobName={jobName} skill={s} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SkillAwakening;
