'use client';

import { useState } from 'react';
import { useCharacterData } from '@/app/_hooks/useCharacterData';
import { useEnchantPriceList } from '@/app/_hooks/useEnchantPriceList';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import Loading from '@/app/_components/common/Loading';
import Row from '@/app/_components/layout/Row';
import {
  GrindingSummaryDialog,
  PartholnSummaryDialog,
  StatsSummaryDialog,
  TourSummaryDialog,
} from './menubar';
import Column from '@/app/_components/layout/Column';
import PreivewList from './preview/PreivewList';
import PreviewTitle from './preview/PreviewTitle';
import RaidSelectorWithStats from '@/app/_components/selecter/RaidSelectorWithStats';
import EnchantTotalPrice from '@/app/_features/preview/components/EnchantTotalPrice';
import { Button } from '@/components/ui/button';
import AttackPower from './preview/AttackPower';

const PreviewBody = () => {
  const { isLoading, error, name } = useCharacterData();
  const [isChartVisible, setIsChartVisible] = useState(false);
  useEnchantPriceList();

  if (!name) return <ErrorDisplay content="캐릭터 이름을 입력해주세요" />;
  if (isLoading) return <Loading />;
  if (error)
    return (
      <ErrorDisplay
        content={
          <div className="text-center text-red-100">
            캐릭터 조회에 실패했습니다.
          </div>
        }
      />
    );

  return (
    <>
      <Row className="w-full items-center justify-end gap-2 text-xs">
        <TourSummaryDialog />
        <StatsSummaryDialog />
        <PartholnSummaryDialog />
        <GrindingSummaryDialog />
        <Button
          className="text-xs"
          onClick={() => setIsChartVisible((prev) => !prev)}
          variant="outline"
        >
          공격력 그래프
        </Button>
      </Row>

      <Column>
        <PreviewTitle />
        <PreivewList />
        <Row className="flex items-center justify-end text-white">
          <EnchantTotalPrice />
        </Row>
      </Column>

      <RaidSelectorWithStats />

      {isChartVisible && <AttackPower setIsChartVisible={setIsChartVisible} />}
    </>
  );
};

export default PreviewBody;
