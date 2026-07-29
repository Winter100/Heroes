import { MonstersType } from '@/app/_type/raidType';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { limitCalculator } from '@/app/_utils/calculate/calculate-util';
import ChartAttackPower from '../../preview/components/menubar/chart/chart-attack-power';

interface RaidInfoDetailProps {
  selectedRaid: MonstersType;
}

const RaidInfoDetail = ({ selectedRaid }: RaidInfoDetailProps) => {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-4 rounded-md bg-muted/50 p-2">
        <ImageIcon
          className="h-4 w-4 md:h-6 md:w-6"
          imageClassName="rounded-sm"
          src={selectedRaid.image ?? ''}
          alt={selectedRaid?.battle.toString()}
        />
        <span>{selectedRaid.battle}</span>
      </div>

      {/* 공격력 변곡점 */}
      <div className="rounded-md bg-muted/50 p-2">
        <ChartAttackPower
          bossAttackCap={
            Number(
              selectedRaid.limit.find((stat) =>
                stat.stat_name.includes('공격력')
              )?.stat_value
            ) ?? 0
          }
          userAttack={0}
        />
      </div>

      {/* 빠른 전투 */}
      {selectedRaid.entry && selectedRaid.entry.length > 0 && (
        <div className="rounded-md bg-muted/50 p-2">
          <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
            빠른 전투
          </h4>
          <Table className="w-full table-fixed border-collapse bg-background text-sm">
            <TableCaption></TableCaption>
            <TableHeader className="sticky top-0 z-10 bg-zinc-900">
              <TableRow>
                {selectedRaid.entry?.map((e) => (
                  <TableHead key={e.stat_name} className="text-center">
                    <span className="flex items-center justify-center gap-1">
                      <ImageIcon
                        className="h-4 w-4"
                        src={e?.image ?? ''}
                        alt={e.stat_name}
                      />
                      {e.stat_name}
                    </span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="relative transition">
                {selectedRaid.entry?.map((e) => (
                  <TableCell
                    key={e.stat_value}
                    className="text-center font-medium"
                  >
                    {limitCalculator(selectedRaid, '빠른전투', e?.stat_name, '')
                      ?.toString()
                      .replace(/-/gi, '')}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      {/* 클리어 보상 */}
      {selectedRaid.clear && selectedRaid.clear?.length > 0 && (
        <div className="rounded-md bg-muted/50 p-2">
          <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
            클리어 보상
          </h4>
          <Table className="w-full table-fixed border-collapse bg-background text-sm">
            <TableCaption></TableCaption>
            <TableHeader className="sticky top-0 z-10 bg-zinc-900">
              <TableRow>
                {selectedRaid.clear?.map((clear) => (
                  <TableHead key={clear.name} className="text-center">
                    {clear.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="relative transition">
                {selectedRaid.clear?.map((clear) => (
                  <TableCell
                    key={clear.name}
                    className="text-center font-medium"
                  >
                    {Number(clear.value).toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      {/* 보너스 목표 */}
      {selectedRaid.bonus && selectedRaid.bonus.length > 0 && (
        <div className="rounded-md bg-muted/50 p-2">
          <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
            보너스 목표
          </h4>
          <Table className="w-full table-fixed border-collapse bg-background text-sm">
            <TableCaption></TableCaption>
            <TableHeader className="sticky top-0 z-10 bg-zinc-900">
              <TableRow>
                {selectedRaid.bonus?.map((bonusList) => (
                  <TableHead key={bonusList.bonus} className="text-center">
                    {bonusList.bonus}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="relative transition">
                {selectedRaid.bonus?.map((bonusList) => (
                  <TableCell
                    key={bonusList.value}
                    className="text-center font-medium"
                  >
                    {Number(bonusList.value)?.toLocaleString() ?? ''}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default RaidInfoDetail;
