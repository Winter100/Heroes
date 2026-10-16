import { MonstersType } from '@/app/_type/raidType';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { limitCalculator } from '@/app/_utils/calculate/calculate-util';
import ChartAttackPower from '../../preview/components/menubar/chart/chart-attack-power';
import { raidInfoInitialTitleList } from '@/app/_constant/keyword';

interface RaidInfoDetailProps {
  selectedRaid: MonstersType;
}

const RaidInfoDetail = ({ selectedRaid }: RaidInfoDetailProps) => {
  return (
    <div className="flex h-full min-w-0 flex-col gap-5 md:gap-6">
      <div className="flex items-center gap-4 rounded-xl border bg-card px-5 py-6 shadow-sm md:px-6">
        <ImageIcon
          className="h-12 w-12 shrink-0 md:h-14 md:w-14"
          imageClassName="rounded-lg"
          src={selectedRaid.image ?? ''}
          alt={selectedRaid?.battle.toString()}
        />
        <h1 className="break-words text-xl font-semibold tracking-tight md:text-2xl">
          {selectedRaid.battle}
        </h1>
      </div>

      {/* 공격력 변곡점 */}
      <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
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
        <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
          <h2 className="border-b px-5 py-4 text-sm font-semibold tracking-tight text-foreground">
            빠른 전투
          </h2>
          <Table className="w-full min-w-[480px] table-fixed border-collapse text-sm">
            <TableHeader className="bg-muted/40">
              <TableRow>
                {selectedRaid.entry?.map((e) => (
                  <TableHead
                    key={e.stat_name}
                    className="px-3 py-3 text-center text-xs font-medium text-muted-foreground"
                  >
                    <span className="flex items-center justify-center gap-1">
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
                    key={e.stat_name}
                    className="px-3 py-4 text-center font-semibold tabular-nums text-foreground"
                  >
                    {limitCalculator(
                      selectedRaid,
                      '빠른전투',
                      e?.stat_name,
                      '0'
                    )
                      ?.toString()
                      .replace(/-/gi, '')}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      {/* 상한 */}
      {selectedRaid.limit && selectedRaid.limit.length > 0 && (
        <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
          <h2 className="border-b px-5 py-4 text-sm font-semibold tracking-tight text-foreground">
            상한
          </h2>
          <Table className="w-full min-w-[480px] table-fixed border-collapse text-sm">
            <TableHeader className="bg-muted/40">
              <TableRow>
                {raidInfoInitialTitleList.map((e) => (
                  <TableHead
                    key={e.stat_name}
                    className="px-3 py-3 text-center text-xs font-medium text-muted-foreground"
                  >
                    <span className="flex items-center justify-center gap-1">
                      {e.stat_name}
                    </span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="relative transition">
                {raidInfoInitialTitleList.map((e) => (
                  <TableCell
                    key={e.stat_name}
                    className="px-3 py-4 text-center font-semibold tabular-nums text-foreground"
                  >
                    {limitCalculator(selectedRaid, '상한', e?.stat_name, '')
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
        <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
          <h2 className="border-b px-5 py-4 text-sm font-semibold tracking-tight text-foreground">
            클리어 보상
          </h2>
          <Table className="w-full min-w-[480px] table-fixed border-collapse text-sm">
            <TableHeader className="bg-muted/40">
              <TableRow>
                {selectedRaid.clear?.map((clear) => (
                  <TableHead
                    key={clear.name}
                    className="px-3 py-3 text-center text-xs font-medium text-muted-foreground"
                  >
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
                    className="px-3 py-4 text-center font-semibold tabular-nums text-foreground"
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
        <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
          <h2 className="border-b px-5 py-4 text-sm font-semibold tracking-tight text-foreground">
            보너스 목표
          </h2>
          <Table className="w-full min-w-[480px] table-fixed border-collapse text-sm">
            <TableHeader className="bg-muted/40">
              <TableRow>
                {selectedRaid.bonus?.map((bonusList) => (
                  <TableHead
                    key={bonusList.bonus}
                    className="px-3 py-3 text-center text-xs font-medium text-muted-foreground"
                  >
                    {bonusList.bonus}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="relative transition">
                {selectedRaid.bonus?.map((bonusList) => (
                  <TableCell
                    key={bonusList.bonus}
                    className="px-3 py-4 text-center font-semibold tabular-nums text-foreground"
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
