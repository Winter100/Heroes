'use client';
import { partholn } from '@/app/_constant/partholn';
import { usePreviewStore } from '@/app/_store/previewStore';
import { usePartholnStore } from '../../../store/partholnStore';
import PartholnList from './PartholnList';

const PartholnContent = () => {
  const level = usePartholnStore((state) => state.level);
  const setLevel = usePartholnStore((state) => state.setLevel);
  const setBeforeStats = usePreviewStore((state) => state.setBeforeStats);

  return (
    <div className="dark flex flex-col items-center justify-center gap-4 text-xs sm:text-sm">
      <p className="text-red-300">
        * 시공간왜곡 및 결사대 컷을 계산할때 이용해주세요
      </p>
      <p>기존 스탯에서 원정단으로 증가한 수치만큼 빼게 됩니다</p>
      <div className="w-full rounded-md bg-background p-2">
        <PartholnList
          partholn={partholn}
          level={level}
          setLevel={setLevel}
          setBeforeStats={setBeforeStats}
        />
      </div>
    </div>
  );
};

export default PartholnContent;
