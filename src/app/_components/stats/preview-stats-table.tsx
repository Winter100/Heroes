import { Stat } from '@/app/_type/previewType';
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { RaidType } from '@/app/_store/useRaidStore';
import PreviewStatsTableHead from './preview-stats-table-head';
import PreviewStatsTableCell from './preview-stats-table-cell';
import { MonstersType } from '@/app/_type/raidType';

const PreviewStatsTable = ({
  raid,
  raidType,
  userStats,
  statNameList,
}: {
  raid: (MonstersType & { type: RaidType }) | null;
  raidType: RaidType;
  userStats: Stat[];
  statNameList: { stat_name: string }[];
}) => {
  return (
    <div className="rounded-md bg-background">
      <Table className="table-fixed caption-top">
        <TableCaption className="hidden"></TableCaption>
        <TableHeader>
          <TableRow>
            <PreviewStatsTableHead statsNameList={statNameList} />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <PreviewStatsTableCell
              raid={raid}
              raidType={raidType}
              simulationStats={userStats}
            />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PreviewStatsTable;
