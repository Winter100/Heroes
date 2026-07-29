'use client';

import { SlRefresh } from 'react-icons/sl';
import { Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { useCategory } from '@/app/_hooks/custom/useCategory';

type Props = {
  itemCategory: { [key: string]: string[] };
  pathName: string;
};

const ItemInfoTableCategoryMobile = ({ itemCategory, pathName }: Props) => {
  const {
    currentCategory,
    currentSubCategory,
    handleClearAll,
    handleSelectCategory,
    handleSelectSubCategory,
  } = useCategory(pathName);

  // Todo 반응형 수정하기
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex w-full items-center justify-between"
        >
          <span className="flex items-center gap-2">
            {currentCategory || currentSubCategory ? (
              `${currentCategory ?? ''}${currentSubCategory ?? ''}`
            ) : (
              <Filter className="h-4 w-4" />
            )}
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>카테고리 선택</SheetTitle>
          <SheetDescription>카테고리를 선택해주세요</SheetDescription>
        </SheetHeader>

        {(currentCategory || currentSubCategory) && (
          <Button
            variant="ghost"
            onClick={handleClearAll}
            className="mt-4 w-full"
          >
            <SlRefresh className="mr-2" />
            전체 보기
          </Button>
        )}

        <div className="mt-6 space-y-5">
          {Object.entries(itemCategory).map(([mainCat, subCategories]) => {
            const isMainActive = currentCategory === mainCat;

            return (
              <div key={mainCat}>
                <Button
                  variant={isMainActive ? 'secondary' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => handleSelectCategory(mainCat)}
                >
                  {mainCat}
                </Button>

                {isMainActive && subCategories.length > 0 && (
                  <div className="ml-3 mt-2 flex flex-col gap-2 border-l pl-4">
                    {subCategories.map((subCat) => (
                      <Button
                        asChild
                        key={subCat}
                        variant={
                          currentSubCategory === subCat ? 'secondary' : 'ghost'
                        }
                        className="justify-start"
                        onClick={() => handleSelectSubCategory(subCat)}
                      >
                        <SheetClose>{subCat}</SheetClose>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ItemInfoTableCategoryMobile;
