'use client';

import { useMemo } from 'react';
import { useEnchantPrice, usePreviewAllData } from '@/app/_hooks';
import { EnchantTableType } from '@/app/_type/enchantType';
import { mergeEnchantPrice } from '@/app/_utils/convert';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import ItemInfoTableCategory from '../../iteminfo/components/item-info-table-category';
import ItemEnchantSelected from './item-enchant-selected';
import ItemEnchantTable, { getUniqueBaseStrings } from './item-enchant-table';
import Loading from '@/app/_components/common/Loading';

const EnchantInformationContainer = () => {
  const { enchantOptions } = usePreviewAllData();
  const { isLoading, data: enchantPriceData } = useEnchantPrice();
  const {
    currentCategory,
    currentSubCategory,
    handleBackToList,
    handleClearAll,
    handleSelectCategory,
    handleSelectItem,
    handleSelectSubCategory,
    selectedItemId,
  } = useCategory();

  const visibleEnchant: EnchantTableType[] = useMemo(() => {
    return mergeEnchantPrice(
      enchantOptions.data ?? [],
      enchantPriceData ?? []
    ).map((enchant) => {
      const slots = getUniqueBaseStrings(
        enchant.slot?.map((e) => e.name) ?? []
      );
      return {
        ...enchant,
        slot: slots,
      };
    });
  }, [enchantOptions.data, enchantPriceData]);

  if (isLoading) return <Loading />;

  const CATEGORY_MAP = getRankCategoryMap(visibleEnchant);

  const selectedAffix =
    currentCategory === '접두'
      ? 'prefix'
      : currentCategory === '접미'
        ? 'suffix'
        : null;

  const filteredEnchant = visibleEnchant.filter((item) => {
    // 카테고리만 있고 서브카테고리 없으면 카테고리만 렌더링
    if (currentCategory && !currentSubCategory) {
      return item.affix.toUpperCase() === selectedAffix?.toUpperCase();
    }

    if (currentCategory && currentSubCategory) {
      return item.slot.some((slot) => slot.includes(currentSubCategory));
    }

    // 아무것도 선택이 안되어 있을때 모두 보기
    return true;
  });

  const selectedItem = filteredEnchant.find(
    (item) => item.name === selectedItemId
  );

  return (
    <div className="flex-1">
      <h2>인챈트 정보</h2>
      <div className="flex h-[750px] gap-4 overflow-y-hidden">
        {/* 왼쪽 카테고리 메뉴 패널 */}
        <ItemInfoTableCategory
          categoryMap={CATEGORY_MAP}
          currentCategory={currentCategory}
          currentSubCategory={currentSubCategory}
          handleSelectCategory={handleSelectCategory}
          handleSelectSubCategory={handleSelectSubCategory}
          handleClearAll={handleClearAll}
        />

        {/* 오른쪽 콘텐츠 영역 (구조 및 사이즈 변경 없음) */}
        <div className="flex min-w-[976px] flex-1 flex-col gap-4 overflow-y-hidden">
          <RoundedContainer className="flex h-12 items-center gap-2 bg-muted/70 px-4 py-2">
            <div className="w-10">
              {selectedItem && (
                <button
                  onClick={handleBackToList}
                  className="rounded bg-zinc-700 px-3 py-1 text-sm text-white transition hover:bg-zinc-600"
                >
                  ←
                </button>
              )}
            </div>
            <div className="text-sm text-zinc-300">
              {currentCategory ? `${currentCategory}` : '전체'}
              {currentSubCategory ? ` ➔ ${currentSubCategory}` : ''} 리스트
            </div>
          </RoundedContainer>

          <div className="flex-1 overflow-y-auto rounded-md">
            {selectedItem ? (
              <ItemEnchantSelected selectedItem={selectedItem} />
            ) : (
              <ItemEnchantTable
                handleSelectItem={handleSelectItem}
                itemRecipe={filteredEnchant}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnchantInformationContainer;

export function getRankCategoryMap(
  enchantList: EnchantTableType[]
): Record<string, string[]> {
  const prefixSlots = new Set<string>();
  const suffixSlots = new Set<string>();

  enchantList.forEach((item) => {
    if (item.affix.toUpperCase() === 'PREFIX') {
      item.slot?.forEach((enchant) =>
        prefixSlots.add(enchant.toString().toUpperCase())
      );
    } else if (item.affix.toUpperCase() === 'SUFFIX') {
      item.slot?.forEach((enchant) =>
        suffixSlots.add(enchant.toString().toUpperCase())
      );
    }
  });

  const sortDescending = (Slotset: Set<string>): string[] => {
    return Array.from(Slotset).sort((a, b) => Number(a) - Number(b));
  };

  return {
    접두: sortDescending(prefixSlots),
    접미: sortDescending(suffixSlots),
  };
}
