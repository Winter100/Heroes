import { raidList } from '@/app/_constant/raidList';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { getImageByName } from '@/app/_utils/getImageByName';
import { ZoomIn } from 'lucide-react';
import RaidTableDialog from './dialog/RaidTableDialog';
import { flatRaidList } from '../utils/flatRaidList';

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
        {newRaidList.map((raid, i) => (
          <TableRow
            key={raid.name + i}
            className="rounded-md border-b hover:text-white"
          >
            <TableCell>{raid.region}</TableCell>
            <TableCell>{raid.name}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <div className="h-auto w-5">
                  <Image
                    className="h-auto w-full object-cover"
                    width={30}
                    height={20}
                    alt="B"
                    src={getImageByName(raid.name)}
                  />
                </div>
                <div className="hidden sm:block">{raid.boss_name}</div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              {isNaN(
                Number(
                  raid.basic_reward?.find((reward) => reward.name === '골드')
                    ?.value
                )
              )
                ? ''
                : Number(
                    raid.basic_reward?.find((reward) => reward.name === '골드')
                      ?.value
                  ).toLocaleString()}
            </TableCell>
            <TableCell className="text-center">
              <RaidTableDialog {...raid}>
                <ZoomIn className="mx-auto" size={20} />
              </RaidTableDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RaidInfoTable;
