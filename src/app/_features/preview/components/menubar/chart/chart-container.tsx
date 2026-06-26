'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ChartAttackPower from '@/app/_features/preview/components/menubar/chart/chart-attack-power';
import { useSimulationStats } from '@/app/_hooks';
import { useRaidStore } from '@/app/_store/useRaidStore';
import RaidSelectorContainer from '@/app/_components/selector/raid-selector-container';
import PreviewStatsContainer from '@/app/_components/stats/preview-stats-container';

const ChartContainer = ({ ocid }: { ocid: string }) => {
  const { finalStatsArray } = useSimulationStats(ocid);

  const userAttack = finalStatsArray.find(
    (s) => s.stat_name === '공격력'
  )?.stat_value;
  const boss = useRaidStore((state) => state.raid);
  const bossAttackCap = boss?.limit.find(
    (s) => s.stat_name === '공격력'
  )?.stat_value;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          공격력 그래프
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-3xl overflow-hidden overflow-y-auto break-all border-none bg-zinc-900 text-white sm:max-h-[950px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {boss ? (
          <ChartAttackPower
            bossAttackCap={Number(bossAttackCap) ?? 0}
            userAttack={Number(userAttack)}
          />
        ) : (
          <div className="py-2">
            <p className="text-center text-sm text-red-300">
              레이드 선택이 필요합니다.
            </p>
          </div>
        )}
        <div className="dark">
          <div className="mx-auto mb-2 w-full max-w-72">
            <RaidSelectorContainer />
          </div>
          <PreviewStatsContainer ocid={ocid} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChartContainer;
