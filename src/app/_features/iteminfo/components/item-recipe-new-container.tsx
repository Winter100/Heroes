'use client';

import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { usePreviewAllData } from '@/app/_hooks';
import { sortRecipe } from '@/app/_utils/convert';
import ItemRecipeTable from './item-recipe-table';
import ItemRecipeSelectedItem from './item-recipe-selectedItem';
import ItemInfoTableCategory from './item-info-table-category';
import { useCategory } from '@/app/_hooks/custom/useCategory';

const CATEGORY_MAP = {
  장비: ['와드네', '에리우', '악세서리'],
  소모품: [], // 소모품은 하위 뎁스 없음
  재료: ['오르나 관련', '와드네 관련', '에리우 관련', '기타'],
};

const ItemRecipeNewContainer = () => {
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

  const { itemRecipe } = usePreviewAllData();

  const allRecipe = sortRecipe(itemRecipe?.data ?? []);

  const filteredRecipe = allRecipe.filter((item) => {
    if (currentCategory && item.category !== currentCategory) return false;

    if (currentCategory === '장비' && currentSubCategory) {
      if (currentSubCategory === '악세서리') {
        return !['오르나', '와드네', '에리우'].some((keyword) =>
          item.name.includes(keyword)
        );
      }
      return item.name.includes(currentSubCategory);
    }

    if (currentCategory === '재료' && currentSubCategory) {
      if (currentSubCategory === '기타') {
        return !['오르나', '와드네', '에리우'].some((keyword) =>
          item.name.includes(keyword)
        );
      }
      const keyword = currentSubCategory.replace(' 관련', '');
      return item.name.includes(keyword);
    }

    return true;
  });

  const findMaterialItem = (itemName: string | null) => {
    if (!itemName) return;
    return allRecipe.find((item) => item.name === itemName);
  };

  const selectedItem = findMaterialItem(selectedItemId);

  const handleMaterial = (itemName: string) => {
    const findItem = findMaterialItem(itemName);
    if (findItem?.materials && findItem.materials.length > 0) {
      handleSelectItem(itemName);
    }
  };

  return (
    <div className="flex-1">
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
        <div className="flex flex-1 flex-col gap-4 overflow-y-hidden">
          <RoundedContainer className="flex h-12 items-center gap-2 bg-zinc-900 px-4 py-2">
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

          <div className="flex-1 overflow-y-auto rounded-md bg-zinc-900">
            {selectedItem ? (
              <ItemRecipeSelectedItem
                selectedItem={selectedItem}
                handleSelectItem={handleMaterial}
                findMaterialItem={findMaterialItem}
              />
            ) : (
              <ItemRecipeTable
                handleSelectItem={handleSelectItem}
                itemRecipe={filteredRecipe}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemRecipeNewContainer;
