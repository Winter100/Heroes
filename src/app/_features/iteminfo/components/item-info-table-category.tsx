import RoundedContainer from '@/app/_components/layout/RoundedContainer';

interface ItemInfoTableCategoryProps {
  categoryMap: Record<string, string[]>;
  currentCategory: string | null;
  currentSubCategory: string | null;
  handleSelectCategory: (categoryName: string) => void;
  handleSelectSubCategory: (subCategoryName: string) => void;
  handleClearAll: () => void;
}

const ItemInfoTableCategory = ({
  categoryMap,
  currentCategory,
  currentSubCategory,
  handleClearAll,
  handleSelectCategory,
  handleSelectSubCategory,
}: ItemInfoTableCategoryProps) => {
  return (
    <RoundedContainer className="flex min-w-64 flex-col gap-4 overflow-y-auto bg-muted/70 p-4">
      <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
        <h4 className="font-bold">카테고리</h4>
        {(currentCategory || currentSubCategory) && (
          <button
            onClick={handleClearAll}
            className="text-xs text-zinc-400 underline hover:text-white"
          >
            전체보기
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {Object.keys(categoryMap).map((mainCat) => {
          const isMainActive = currentCategory === mainCat;
          const subCategories = categoryMap[mainCat];

          return (
            <div key={mainCat} className="flex flex-col gap-1">
              {/* 대분류 버튼 */}
              <button
                onClick={() => handleSelectCategory(mainCat)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  isMainActive
                    ? 'bg-zinc-800 font-semibold text-white'
                    : 'text-zinc-400 hover:bg-zinc-800/20 hover:text-zinc-200'
                }`}
              >
                {mainCat}
              </button>

              {/* 소분류 버튼 리스트 (대분류가 활성화되어 있고 하위 항목이 있을 때만 오픈) */}
              {isMainActive && subCategories.length > 0 && (
                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-zinc-700 pl-3">
                  {subCategories.map((subCat) => {
                    const isSubActive = currentSubCategory === subCat;
                    return (
                      <button
                        key={subCat}
                        onClick={() => handleSelectSubCategory(subCat)}
                        className={`w-full rounded-md px-2.5 py-1.5 text-left text-xs transition-colors ${
                          isSubActive
                            ? 'bg-zinc-700 font-medium text-white'
                            : 'text-zinc-500 hover:bg-zinc-800/30 hover:text-zinc-300'
                        }`}
                      >
                        • {subCat}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </RoundedContainer>
  );
};

export default ItemInfoTableCategory;
