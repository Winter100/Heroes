import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import Image from 'next/image';
import { SkillData } from '@/app/_type/characterType';
import { extractValue } from '@/app/_utils/get';

const SkillAwakening = ({
  itemName,
  title,
  skillData = [],
}: {
  itemName: string;
  title: string;
  skillData: SkillData[];
}) => {
  return (
    <Table className="rounded-md">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SkillAwakening;
