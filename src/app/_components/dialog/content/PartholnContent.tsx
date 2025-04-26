'use client';
import { usePartholnStore } from '@/app/_store/partholnStore';
import { partholn } from '@/app/_constant/partholn';
import { usePreviewStore } from '@/app/_store/previewStore';
import PartholnList from '@/app/_components/preview/menu/PartholnList';

const PartholnContent = () => {
  const level = usePartholnStore((state) => state.level);
  const setLevel = usePartholnStore((state) => state.setLevel);
  const setBeforeStats = usePreviewStore((state) => state.setBeforeStats);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-sm">
      <p className="text-red-300">
        * 시공간왜곡 및 결사대 컷을 계산할때 이용해주세요
      </p>
      <p>기존 스탯에서 원정단으로 증가한 수치만큼 빼게 됩니다</p>
      <PartholnList
        partholn={partholn}
        level={level}
        setLevel={setLevel}
        setBeforeStats={setBeforeStats}
      />
    </div>
  );
};

export default PartholnContent;
