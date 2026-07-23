import { TableHead } from '@/components/ui/table';

interface Props {
  statsNameList: { stat_name: string }[];
}

const PreviewStatsTableHead = ({ statsNameList }: Props) => {
  return (
    <>
      {statsNameList.map((title) => (
        <TableHead
          className="text-center text-xs text-white"
          key={title.stat_name}
        >
          <p>{title.stat_name}</p>
        </TableHead>
      ))}
    </>
  );
};

export default PreviewStatsTableHead;
