import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const StatsTab = ({
  stats,
  title,
}: {
  stats: { stat_name: string; stat_value: number | string }[];
  title: string;
}) => {
  if (stats.length === 0) {
    return (
      <div className="pt-6 text-center text-sm">
        {title} 능력치 제한이 없는 전투입니다.
      </div>
    );
  }

  return (
    <Table className="caption-top">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="text-xs sm:text-sm">
          {stats?.map((s) => (
            <TableHead className="text-center" key={s.stat_name}>
              {s.stat_name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-xs hover:text-white sm:text-sm">
          {stats?.map((s) => (
            <TableCell className="text-center" key={s.stat_name}>
              {Number(s.stat_value).toLocaleString()}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StatsTab;
