import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { SetSimulationsParams } from '@/app/_store/useEnchantStore';
import { EnchantOptionType } from '@/app/_type/enchantType';

interface Props {
  partholns: EnchantOptionType[];
  selectData: EnchantOptionType | null;
  onClick: (...args: SetSimulationsParams) => void;
}

const PartholnDialog = ({ partholns, selectData, onClick }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          파르홀른
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-2xl overflow-y-auto border-none bg-background px-1 text-white sm:max-h-[950px] sm:px-6">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="dark flex flex-col items-center justify-center gap-4 text-xs sm:text-sm">
          <p className="text-red-300">
            * 시공간왜곡 및 결사대 컷을 계산할때 이용해주세요
          </p>
          <p>기존 스탯에서 원정단으로 증가한 수치만큼 빼게 됩니다</p>
          <div className="w-full rounded-md bg-background p-2">
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
                {partholns.map((partholn) => (
                  <TableRow
                    className={cn(
                      'w-full cursor-pointer',
                      selectData?.rank === partholn.rank && 'text-blue-300'
                    )}
                    onClick={() =>
                      onClick('partholn', 'partholn', partholn, null, false)
                    }
                    key={partholn.name}
                  >
                    <TableCell className="text-center">
                      {partholn.rank}
                    </TableCell>
                    {partholn.effects.map((stat) => (
                      <TableCell className="text-center" key={stat.stat_name}>
                        {stat.stat_value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartholnDialog;

const PARTHOLN_TITLE = [
  '단계',
  '스태미나',
  '공격력',
  '방어력',
  '크리티컬',
  '파괴력',
  '관통력',
];
