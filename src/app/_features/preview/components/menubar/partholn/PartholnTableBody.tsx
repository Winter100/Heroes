import { TableCell, TableRow } from '@/components/ui/table';
import { PartholnTableRowsProps } from '../../../types';
import { cn } from '@/lib/utils';

const PartholnTableRows = ({
  curLevel,
  partholn,
  onClick,
}: PartholnTableRowsProps) => {
  return partholn.map((p) => (
    <TableRow
      className={cn(
        'w-full cursor-pointer border-b border-white',
        curLevel === p.level && 'text-blue-300'
      )}
      onClick={() => onClick(p.level, p.stat)}
      key={p.level}
    >
      <TableCell className="text-center">{p.level}</TableCell>
      {p.stat.map((stat) => (
        <TableCell className="text-center" key={stat.stat_name}>
          {stat.stat_value}
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default PartholnTableRows;
