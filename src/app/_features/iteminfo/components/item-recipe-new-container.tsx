'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/app/_components/common/Loading';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { usePreviewAllData } from '@/app/_hooks';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import ItemTitle from '@/app/_components/item/item-title';
import { sortRecipe } from '@/app/_utils/convert';
import ItemTag from '@/app/_components/common/item/item-tag';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LiaQuestionCircle } from 'react-icons/lia';

// 1. [Best Practice] 카테고리 데이터 구조 정의 (상위 - 하위 계층 구조화)
interface CategoryConfig {
  [mainCategory: string]: string[];
}

const CATEGORY_MAP: CategoryConfig = {
  장비: ['와드네', '에리우', '악세서리'],
  소모품: [], // 소모품은 하위 뎁스 없음
  재료: ['오르나 관련', '와드네 관련', '에리우 관련', '기타'],
};

const ItemrecipeNewContainer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { itemRecipe } = usePreviewAllData();

  if (itemRecipe.isLoading) return <Loading />;

  // 2. URL 파라미터 파싱
  const currentCategory = searchParams.get('category'); // 장비, 소모품, 재료
  const currentSubCategory = searchParams.get('subCategory'); // 오르나, 와드네 등
  const selectedItemId = searchParams.get('name');

  const allRecipe = sortRecipe(itemRecipe?.data ?? []);

  // 3. [핵심] 정밀 필터링 로직 구현 (가독성을 위해 변수로 선언)
  const filteredRecipe = allRecipe.filter((item) => {
    // 메인 카테고리 필터링 조건
    if (currentCategory && item.category !== currentCategory) return false;

    // 장비 카테고리의 하위 뎁스 조건
    if (currentCategory === '장비' && currentSubCategory) {
      if (currentSubCategory === '악세서리') {
        // 악세서리는 오르나, 와드네, 에리우가 이름에 포함되지 않은 것들
        return !['오르나', '와드네', '에리우'].some((keyword) =>
          item.name.includes(keyword)
        );
      }
      // 그 외 전용 탭은 이름에 해당 키워드가 포함되어야 함
      return item.name.includes(currentSubCategory);
    }

    // 재료 카테고리의 하위 뎁스 조건
    if (currentCategory === '재료' && currentSubCategory) {
      if (currentSubCategory === '기타') {
        // 기타는 오르나, 와드네, 에리우 관련이 아닌 재료들
        return !['오르나', '와드네', '에리우'].some((keyword) =>
          item.name.includes(keyword)
        );
      }
      // '오르나 관련' -> '오르나'만 추출하여 매칭
      const keyword = currentSubCategory.replace(' 관련', '');
      return item.name.includes(keyword);
    }

    return true;
  });

  const selectedItem = filteredRecipe.find(
    (item) => item.name === selectedItemId
  );

  // --- 이벤트 핸들러 선언 ---

  // 메인 카테고리 변경 시 하위 카테고리와 선택된 아이템 모두 초기화
  const handleSelectCategory = (categoryName: string) => {
    router.push(`${pathname}?category=${encodeURIComponent(categoryName)}`);
  };

  // 하위 카테고리 변경 시 선택된 아이템만 초기화하고 메인 카테고리는 유지
  const handleSelectSubCategory = (subCategoryName: string) => {
    if (!currentCategory) return;
    router.push(
      `${pathname}?category=${encodeURIComponent(currentCategory)}&subCategory=${encodeURIComponent(subCategoryName)}`
    );
  };

  const handleClearAll = () => {
    router.push(pathname);
  };

  const handleBackToList = () => {
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (currentSubCategory) params.set('subCategory', currentSubCategory);

    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const handleSelectItem = (itemName: string) => {
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (currentSubCategory) params.set('subCategory', currentSubCategory);
    params.set('name', itemName);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex-1">
      <h2>아이템 정보</h2>
      <div className="flex h-[750px] gap-4 overflow-y-hidden">
        {/* 왼쪽 고도화된 다단계 카테고리 메뉴 패널 */}
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
            {Object.keys(CATEGORY_MAP).map((mainCat) => {
              const isMainActive = currentCategory === mainCat;
              const subCategories = CATEGORY_MAP[mainCat];

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

        {/* 오른쪽 콘텐츠 영역 (구조 및 사이즈 변경 없음) */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-hidden">
          <RoundedContainer className="flex h-12 items-center justify-between bg-muted/70 px-4 py-2">
            <div className="text-sm text-zinc-300">
              {currentCategory ? `${currentCategory}` : '전체'}
              {currentSubCategory ? ` ➔ ${currentSubCategory}` : ''} 리스트
            </div>

            {selectedItem && (
              <button
                onClick={handleBackToList}
                className="rounded bg-zinc-700 px-3 py-1 text-sm text-white transition hover:bg-zinc-600"
              >
                ← 리스트로 돌아가기
              </button>
            )}
          </RoundedContainer>

          <div className="flex-1 overflow-y-auto rounded-md">
            {selectedItem ? (
              /* 상세 정보 화면 */
              <RoundedContainer className="flex h-full flex-col gap-4 bg-muted/70 p-4">
                <div className="flex items-center gap-4">
                  <ImageIconUseBorder
                    src={selectedItem?.image ?? ''}
                    itemName={selectedItem?.name ?? ''}
                    isRatingBorder={true}
                  />
                  <div>
                    <ItemTitle
                      name={selectedItem.name}
                      category={selectedItem.category}
                      tier={selectedItem.tier}
                    >
                      <h3>{selectedItem.name}</h3>
                    </ItemTitle>
                    <ItemTag>{selectedItem.category}</ItemTag>
                  </div>
                </div>
                <hr className="border-zinc-700" />
                <div className="flex flex-col gap-2">
                  {selectedItem?.description && (
                    <>
                      <h4 className="text-sm font-semibold text-zinc-300">
                        설명
                      </h4>
                      <p className="mt-1 rounded-md bg-background p-2 text-sm">
                        {selectedItem?.description}
                      </p>
                    </>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-300">
                      제작 재료
                    </h4>
                    <div className="mt-1 grid grid-cols-2 gap-3">
                      {selectedItem?.materials?.map((material, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 rounded-lg border bg-background p-3 transition-colors hover:border-slate-700/60"
                        >
                          <div className="flex w-10 items-center justify-center rounded border border-slate-700 bg-slate-800 text-xl">
                            <ImageIconUseBorder
                              src={material?.image ?? ''}
                              itemName={material?.name ?? ''}
                              isRatingBorder={true}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <ItemTitle
                              tier={material?.tier ?? ''}
                              category={material?.category}
                              name={material?.name}
                              className="flex items-center truncate text-sm font-medium"
                            >
                              <span>{material?.name}</span>
                              {material?.option && (
                                <Tooltip delayDuration={100}>
                                  <TooltipTrigger className="ml-1 text-base text-gray-400">
                                    <LiaQuestionCircle />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{material?.option}</p>
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </ItemTitle>
                            <div>
                              {material?.category && (
                                <ItemTag>{material?.category}</ItemTag>
                              )}
                            </div>
                          </div>
                          <div className="rounded border px-2 py-0.5 text-right text-sm text-white">
                            x {material.quantity?.toLocaleString() || 0}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RoundedContainer>
            ) : (
              /* 기존 테이블 리스트 화면 */
              <RoundedContainer className="flex flex-col gap-4 bg-muted/70 p-0">
                <Table className="relative w-full table-fixed border-collapse">
                  <TableCaption></TableCaption>
                  <TableHeader className="sticky top-0 z-10 bg-zinc-950">
                    <TableRow className="bg-muted-foreground/10">
                      <TableHead className="w-[10%]">번호</TableHead>
                      <TableHead className="w-[45%]">아이템명</TableHead>
                      <TableHead className="w-[15%]">카테고리</TableHead>
                      <TableHead className="w-[15%]">부위</TableHead>
                      <TableHead className="w-[15%]">등급</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRecipe.map((item, i) => (
                      <TableRow
                        key={item.name}
                        className="cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
                        onClick={() => handleSelectItem(item.name)}
                      >
                        <TableCell className="font-medium">{i + 1}</TableCell>
                        <TableCell className="flex items-center gap-2">
                          <ImageIcon
                            className="h-8 w-8"
                            src={item?.image ?? ''}
                            alt="a"
                          />
                          <div className="flex flex-col gap-1">
                            <ItemTitle
                              name={item?.name}
                              category={item.category}
                              tier={item?.tier}
                            >
                              {item.name}
                            </ItemTitle>
                            <div className="text-xs">{item?.option}</div>
                          </div>
                        </TableCell>
                        <TableCell>{item?.category}</TableCell>
                        <TableCell>부위</TableCell>
                        <TableCell>{item?.tier}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </RoundedContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemrecipeNewContainer;
