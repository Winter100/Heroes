'use client';
import Row from '@/app/_components/layout/Row';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import Loading from '@/app/_components/common/Loading';
import Column from '@/app/_components/layout/Column';
import PreviewTableHeader from './preview-table-header';
import PreviewTableBody from './preview-table-body';
import TourRaidTableContainer from '../../menubar/tour/tour-raid-table-container';
import PartholnContainer from '../../menubar/partholn/partholn-container';
import PreviewStatsSummaryContainer from '../../menubar/stats/preview-stats-summary-container';
import GrindingSummaryContainer from '../../menubar/grinding/grinding-summary-container';
import ChartContainer from '../../menubar/chart/chart-container';
import { useCharacterData } from '@/app/_hooks';
import RaidSelectorAndPreviewStatsContainer from '@/app/_components/common/enchant/raid-selector-and-preview-stats-container';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { EnchantOptionSort, enchantsByGroupSlot } from '@/app/_utils/enchant';
import { GrindType, ItemSetType } from '@/app/_type/itemType';
import {
  enchantEffectOrderMap,
  infusionEffectOrderMap,
} from '@/app/_constant/keyword';
import { RaidListType } from '@/app/_type/raidType';

type Props = {
  enchants: EnchantOptionType[];
  infusion: EnchantOptionType[];
  grind: GrindType[];
  itemSetOption: ItemSetType[];
  raid: RaidListType[];
};
const PreviewTable = ({
  enchants = [],
  infusion = [],
  grind = [],
  itemSetOption = [],
  raid = [],
}: Props) => {
  const { name, ocid, error, isLoading, equipment } = useCharacterData(grind);

  const enchantsBySlot = enchantsByGroupSlot({
    enchantOptions: EnchantOptionSort(
      enchants,
      enchantEffectOrderMap,
      'enchant'
    ),
    infusions: EnchantOptionSort(infusion, infusionEffectOrderMap, 'infusion'),
  });

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
    <div className="flex flex-1 flex-col gap-2">
      {/* 각종 메뉴 리스트 */}
      <Row className="w-full items-center justify-end gap-2 text-xs">
        <TourRaidTableContainer ocid={ocid ?? ''} raid={raid} />
        <PreviewStatsSummaryContainer ocid={ocid ?? ''} />
        <PartholnContainer />
        <GrindingSummaryContainer
          items={equipment.data?.items ?? []}
          ocid={ocid ?? ''}
          raid={raid}
        />
        <ChartContainer ocid={ocid ?? ''} raid={raid} />
      </Row>

      <div className="flex flex-col gap-2 rounded-md bg-zinc-900 p-2">
        {/* 캐릭터 아이템 정보 */}
        <Column className="flex flex-col gap-2 rounded-md">
          <PreviewTableHeader />
          <PreviewTableBody
            items={equipment.data?.items ?? []}
            enchantsBySlot={enchantsBySlot}
            grind={grind}
            itemSetOption={itemSetOption}
            ocid={ocid ?? ''}
          />
        </Column>

        <div className="rounded-md">
          <RaidSelectorAndPreviewStatsContainer ocid={ocid ?? ''} raid={raid} />
        </div>
      </div>
    </div>
  );
};

export default PreviewTable;
