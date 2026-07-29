'use client';
import { RotateCcw, ChevronDown } from 'lucide-react';

type Props = {
  itemCategory: { [key: string]: string[] };
  currentCategory: string | null;
  currentSubCategory: string | null;
  handleClearAll: () => void;
  handleSelectCategory: (category: string) => void;
  handleSelectSubCategory: (subCategory: string) => void;
};

const ItemInfoTableCategory = ({
  itemCategory,
  currentCategory,
  currentSubCategory,
  handleClearAll,
  handleSelectCategory,
  handleSelectSubCategory,
}: Props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between border-b border-border px-2 pb-3">
        <h2 className="text-sm font-bold tracking-tight text-foreground">
          카테고리
        </h2>
        {currentCategory && (
          <button
            type="button"
            onClick={handleClearAll}
            className="flex items-center gap-1.5 rounded-md bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
          >
            <RotateCcw className="size-3.5" />
            초기화
          </button>
        )}
      </div>

      {/* 카테고리 리스트 영역 */}
      <div className="flex-1 overflow-y-auto px-1">
        <div className="flex flex-col gap-2">
          {Object.keys(itemCategory).map((mainCat) => {
            const isMainActive = currentCategory === mainCat;
            const subCategories =
              itemCategory[mainCat as keyof typeof itemCategory];
            const hasSubCategories = subCategories && subCategories.length > 0;

            return (
              <div key={mainCat} className="flex flex-col">
                <button
                  onClick={() => handleSelectCategory(mainCat)}
                  className={`group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                    isMainActive
                      ? 'bg-primary/10 font-semibold text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <span>{mainCat}</span>
                  {hasSubCategories && (
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isMainActive
                          ? 'rotate-180 text-primary'
                          : 'text-muted-foreground/70 group-hover:text-foreground'
                      }`}
                    />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isMainActive && hasSubCategories
                      ? 'mt-1 grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-4 flex flex-col gap-1 border-l-2 border-border/60 py-1 pl-3">
                      {subCategories?.map((subCat) => {
                        const isSubActive = currentSubCategory === subCat;
                        return (
                          <button
                            key={subCat}
                            onClick={() => handleSelectSubCategory(subCat)}
                            className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
                              isSubActive
                                ? 'bg-accent font-semibold text-foreground'
                                : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                            }`}
                          >
                            {subCat}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemInfoTableCategory;
