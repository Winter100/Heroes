import Image from "next/image";
import { getImageByName } from "@/app/_utils/getImageByName";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SkilDetailCardItem from "../card/SkilDetailCardItem";
import { extractValue } from "./CharacterSkillAwakeningTable";

interface CharacterSkillAwakeningProps {
  itemName: string;
  title: string;
  jobName: string;
  skillData: {
    skill_name: string;
    item_name: string;
  }[];
}

const CharacterSkillAwakening = ({
  itemName,
  title,
  jobName,
  skillData = [],
}: CharacterSkillAwakeningProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/5">
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
              <Popover>
                <PopoverTrigger className="h-full w-full p-2">
                  <div className="flex items-center gap-2">
                    <Image
                      className="rounded-sm"
                      src={getImageByName(s.skill_name)}
                      width={20}
                      height={20}
                      alt="s"
                    />
                    <div className="flex w-full">
                      <div className="flex flex-1 text-start">
                        {s.skill_name}
                      </div>
                      <div className="w-10 text-xs">
                        {extractValue(s.item_name)}
                      </div>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="dark w-full max-w-[350px]">
                  <SkilDetailCardItem
                    jobName={jobName}
                    skillName={s.skill_name}
                  />
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CharacterSkillAwakening;
