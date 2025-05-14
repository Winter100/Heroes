import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Bonus } from '../../../types';

const BonusTab = ({ bonus }: { bonus: Bonus[] }) => {
  if (bonus.length === 0) {
    return (
      <div className="pt-6 text-center text-sm">
        보너스 목표가 없는 전투입니다.
      </div>
    );
  }

  return (
    <Table className="caption-top">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="text-xs sm:text-sm">
          <TableHead className="text-center">목표</TableHead>
          <TableHead className="text-center">보상</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bonus.map((b) => (
          <TableRow
            className="text-xs hover:text-white sm:text-sm"
            key={b.bonus_description}
          >
            <TableCell className="">{b.bonus_description}</TableCell>
            <TableCell className="text-center">{b.bonus_value} Gold</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BonusTab;
