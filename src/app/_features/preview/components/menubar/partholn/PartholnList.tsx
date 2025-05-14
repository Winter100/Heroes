import { Stat } from '@/app/_type/previewType';
import { PartholnListProps } from '../../../types';
import { PARTHOLN, PARTHOLN_TITLE } from '../../constant';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import PartholnTableRows from './PartholnTableBody';

const PartholnList = ({
  level,
  partholn,
  setLevel,
  setBeforeStats,
}: PartholnListProps) => {
  const onSelect = (level: number, stat: Stat[]) => {
    const beforeStat = {
      slot: PARTHOLN,
      upgreadeType: PARTHOLN,
      name: PARTHOLN,
      stat_value: stat,
    };
    setLevel(level);
    setBeforeStats(beforeStat);
  };
  return (
    <Table className="table-fixed">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          {PARTHOLN_TITLE.map((title) => (
            <TableHead className="text-center" key={title}>
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <PartholnTableRows
          curLevel={level}
          partholn={partholn}
          onClick={onSelect}
        />
      </TableBody>
    </Table>
  );
};
export default PartholnList;
