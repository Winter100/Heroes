'use client';
import { usePreviewStore } from '@/app/_store/previewStore';
import { useAbilityStore } from '@/app/_store/abilityStore';
import { getMaterials } from '@/app/_components/preview/utils/getMaterials';
import GrindingResult from '@/app/_components/preview/menu/GrindingResult';
import ErrorDisplay from '../../common/error/ErrorDisplay';

const GrindingContent = () => {
  const items = usePreviewStore((state) => state.info);
  const grindingItems = items.filter((item) => item.item_option.tuning_stat);

  const ingredientItems = grindingItems.map(
    (item) => item.item_option.tuning_stat
  );
  const ingredientItemsCount = ingredientItems.length;

  const ability = useAbilityStore((state) => state.ability);

  const ab = ability.map((ab) => {
    return {
      stat_max_value: '1',
      stat_min_value: '1',
      stat_name: ab?.name ?? '',
      stat_one_value: '1',
      stat_value: '2',
      one_ingredient: ab?.ingredient ?? [],
    };
  });

  const mergedItems = ingredientItems?.concat([ab]) || [ab];

  const materialsArray = getMaterials(mergedItems);

  if (ingredientItemsCount === 0)
    return <ErrorDisplay content="연마 가능한 장비가 없습니다." />;

  return (
    <GrindingResult
      grindingItems={grindingItems}
      materialsArray={materialsArray}
    />
  );
};

export default GrindingContent;
