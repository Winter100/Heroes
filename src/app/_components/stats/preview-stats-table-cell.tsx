import { MonstersType } from '@/app/_constant/raidList';
import { RaidType } from '@/app/_store/useRaidStore';
import { Stat } from '@/app/_type/previewType';
import { limitCalculator } from '@/app/_utils/raid/limitCalculator';
import { TableCell } from '@/components/ui/table';
import StatDifference from '../common/StatDifference';

interface Props {
  raid: MonstersType | null;
  raidType: RaidType;
  simulationStats: Stat[];
}

const PreviewStatsTableCell = ({ raid, raidType, simulationStats }: Props) => {
  return (
    <>
      {simulationStats.map((item) => {
        const stat = limitCalculator(
          raid,
          raidType,
          item?.stat_name,
          item?.stat_value.toString()
        );

        return (
          <TableCell
            className="text-center text-xs"
            key={item.stat_name + item.stat_value}
          >
            {item.stat_value}
            {raid?.battle && <StatDifference stat={stat} />}
          </TableCell>
        );
      })}
    </>
  );
};

export default PreviewStatsTableCell;
