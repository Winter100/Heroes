'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { usePreviewStore } from '@/app/_store/previewStore';
import { previewInitialTitleList } from '@/app/_constant/rankTitleList';
import CalculatorStat from './CalculatorStat';
import { filterStats } from '@/app/_features/preview/utils/filterStats';
import { TableProps } from '@/app/_features/preview/types';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getImageByName } from '@/app/_utils/get/getImageByName';

const BossStatsTable = ({ boss, filter }: TableProps) => {
  const userStats = usePreviewStore((state) => state.previewAllStats);
  const filteredUserStats = filterStats(userStats);
  const limitValue = filteredUserStats.find(
    (i) => i.stat_name === '파괴력'
  )?.stat_value;

  return (
    <Table className="table-fixed border bg-background">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="text-xs">
          {previewInitialTitleList?.map((boss) => (
            <TableHead className="text-center" key={boss?.stat_name}>
              <div className="hidden text-center text-[11px] sm:block sm:text-xs">
                {boss.stat_name}
              </div>
              <div className="flex items-center justify-center sm:hidden">
                <ImageIcon
                  className="h-4 w-4"
                  src={getImageByName(boss.stat_name)}
                  alt="s"
                />
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-xs">
          {filteredUserStats?.map((user) => (
            <TableCell className="text-center" key={user.stat_name}>
              <div>{user.stat_value}</div>
              <CalculatorStat
                bossData={boss}
                filter={filter}
                limitValue={limitValue}
                stat_name={user.stat_name}
                stat_value={user.stat_value}
              />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BossStatsTable;
