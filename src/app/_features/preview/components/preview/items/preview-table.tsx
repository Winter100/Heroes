'use client';
import Row from '@/app/_components/layout/Row';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import Loading from '@/app/_components/common/Loading';
import Column from '@/app/_components/layout/Column';
import PreviewTableHeader from './preview-table-header';
import PreviewTableBody from './preview-table-body';
import RaidSelectorContainer from '@/app/_components/selector/raid-selector-container';
import PreviewStatsContainer from '@/app/_components/stats/preview-stats-container';
import TourRaidTableContainer from '../../menubar/tour/tour-raid-table-container';
import PartholnContainer from '../../menubar/partholn/partholn-container';
import PreviewStatsSummaryContainer from '../../menubar/stats/preview-stats-summary-container';
import GrindingSummaryContainer from '../../menubar/grinding/grinding-summary-container';
import ChartContainer from '../../menubar/chart/chart-container';
import { useCharacterData, usePreviewAllData } from '@/app/_hooks';

const PreviewTable = () => {
  const { name, ocid, error, isLoading, equipment } = useCharacterData();
  const { enchantOptions, infusionOptions } = usePreviewAllData();

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
      {/* 각종 메뉴 리스트 */}
      <Row className="w-full items-center justify-end gap-2 text-xs">
        <TourRaidTableContainer ocid={ocid ?? ''} />
        <PreviewStatsSummaryContainer ocid={ocid ?? ''} />
        <PartholnContainer />
        <GrindingSummaryContainer
          items={equipment.data?.items ?? []}
          ocid={ocid ?? ''}
        />
        <ChartContainer ocid={ocid ?? ''} />
      </Row>

      {/* 캐릭터 아이템 정보 */}
      <Column>
        <PreviewTableHeader />
        <PreviewTableBody
          items={equipment.data?.items ?? []}
          enchantOptions={enchantOptions.data ?? []}
          infusions={infusionOptions.data ?? []}
        />
      </Column>

      {/* 레이드 선택창 */}
      <div className="mx-auto w-full max-w-72">
        <RaidSelectorContainer />
      </div>

      {/* 스텟 미리보기 테이블 */}
      <PreviewStatsContainer ocid={ocid ?? ''} />
    </>
  );
};

export default PreviewTable;
