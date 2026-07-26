import ImageIcon from '@/app/_components/common/image/Image-Icon';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { RaidListType } from '@/app/_type/raidType';
import SuspenseContainer from '../../iteminfo/components/suspense-container';

interface RaidInfoTableProps {
  raid: RaidListType[];
}

const RaidInfoTable = ({ raid }: RaidInfoTableProps) => {
  return (
    <Table className="w-full min-w-[720px] table-fixed border-collapse text-sm">
      <TableCaption></TableCaption>
      <TableHeader className="sticky top-0 z-10 bg-zinc-900">
        <TableRow>
          <TableHead className="w-[10%] text-center">순회</TableHead>
          <TableHead className="w-[20%] text-center">전투</TableHead>
          <TableHead className="w-[30%] text-center">보스</TableHead>
          <TableHead className="w-[10%] text-center">레벨</TableHead>
          <TableHead className="w-[10%] text-center">골드</TableHead>
          <TableHead className="w-[10%] text-center">경험치</TableHead>
          <TableHead className="w-[10%] text-center">AP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs">
        {raid.flatMap((r) => {
          return r.monsters.map((monster) => {
            return (
              <TableRow
                key={monster.battle}
                className="relative h-14 cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
              >
                <TableCell className="text-center">
                  <SuspenseContainer
                    aria-label={monster.battle}
                    className="absolute inset-0"
                    path="/raidinfo"
                    link={monster.battle}
                  >
                    {null}
                  </SuspenseContainer>
                  {r.raid_name}
                </TableCell>
                <TableCell className="text-center">{monster.battle}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center gap-1">
                    <ImageIcon src={monster.image ?? ' '} alt={monster.boss} />
                    {monster.boss}
                  </div>
                </TableCell>
                <TableCell className="text-center">{monster.level}</TableCell>
                {monster.clear?.map((clear) => (
                  <TableCell key={clear.name} className="text-center">
                    {Number(clear.value)?.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
            );
          });
        })}
      </TableBody>
    </Table>
  );
};

export default RaidInfoTable;
