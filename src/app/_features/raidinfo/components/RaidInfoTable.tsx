import { raidList } from '@/app/_constant/raidList';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { flatRaidList } from '../utils/flatRaidList';
import RaidInfoRow from './RaidInfoRow';

const RaidInfoTable = () => {
  const newRaidList = flatRaidList(raidList);

  return (
    <Table className="caption-top">
      <TableCaption className="py-2 text-xs">레이드</TableCaption>
      <TableHeader className="text-xs sm:text-sm">
        <TableRow>
          <TableHead className="text-center">순회</TableHead>
          <TableHead className="text-center">전투</TableHead>
          <TableHead className="text-center">보스</TableHead>
          <TableHead className="text-center">골드</TableHead>
          <TableHead className="text-center">자세히</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs sm:text-sm">
        {newRaidList.map((raid) => (
          <RaidInfoRow key={raid.boss_name} raid={raid} />
        ))}
      </TableBody>
    </Table>
  );
};

export default RaidInfoTable;
