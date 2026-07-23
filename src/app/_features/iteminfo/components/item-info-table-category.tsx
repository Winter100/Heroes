'use client';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import { SlRefresh } from 'react-icons/sl';

type Props = {
  itemCategory: { [key: string]: string[] };
  pathName: string;
};

const ItemInfoTableCategory = ({ itemCategory, pathName }: Props) => {
  const {
    currentCategory,
    currentSubCategory,
    handleClearAll,
    handleSelectCategory,
    handleSelectSubCategory,
  } = useCategory(pathName);

  return (
    <>
      <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
        <h4 className="text-xs md:text-base md:font-bold">카테고리</h4>
        {(currentCategory || currentSubCategory) && (
          <button
            onClick={handleClearAll}
            className="text-zinc-400 underline hover:text-white"
          >
            <SlRefresh />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {Object.keys(itemCategory).map((mainCat) => {
          const isMainActive = currentCategory === mainCat;
          const subCategories =
            itemCategory[mainCat as keyof typeof itemCategory];

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
                  {subCategories?.map((subCat) => {
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
    </>
  );
};

export default ItemInfoTableCategory;
