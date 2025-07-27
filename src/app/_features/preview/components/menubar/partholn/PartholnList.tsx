import { Stat } from '@/app/_type/previewType';
import { PartholnListProps } from '../../../types';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import PartholnTableRows from './PartholnTableBody';

export const PARTHOLN = 'partholn';
const PARTHOLN_TITLE = [
  '단계',
  '스태미나',
  '공격력',
  '방어력',
  '크리티컬',
  '해제',
  '관통력',
];

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
