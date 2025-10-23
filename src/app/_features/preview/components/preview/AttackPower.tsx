'use client';
import AttackPowerChart from '@/app/_components/AttackPowerChart';
import DraggableContainer from '@/app/_components/common/DraggableContainer';
import { usePreviewStore } from '@/app/_store/previewStore';
import { useRaidStore } from '@/app/_store/raidStore';

interface AttackPowerProps {
  setIsChartVisible: (b: boolean) => void;
}

const AttackPower = ({ setIsChartVisible }: AttackPowerProps) => {
  const previewAllStats = usePreviewStore((state) => state.previewAllStats);
  const userAttack = previewAllStats.find(
    (s) => s.stat_name === '공격력'
  )?.stat_value;
  const boss = useRaidStore((state) => state.selectedBoss);
  const bossAttackCap = boss?.limit.find(
    (s) => s.stat_name === '공격력'
  )?.stat_value;

  return (
    <DraggableContainer
      title=""
      onClose={() => setIsChartVisible(false)}
      className="w-full max-w-xl"
      initialPosition={{ x: window.innerWidth / 2 - 350, y: 150 }}
    >
      {boss ? (
        <AttackPowerChart
          bossAttackCap={Number(bossAttackCap) ?? 0}
          userAttack={Number(userAttack)}
        />
      ) : (
        <div className="py-16 text-center">레이드를 선택해주세요</div>
      )}
    </DraggableContainer>
  );
};

export default AttackPower;
