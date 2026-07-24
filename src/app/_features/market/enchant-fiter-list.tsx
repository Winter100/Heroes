'use client';

import { useMemo, useState } from 'react';
import {
  EnchantFormatingType,
  EnchantOptionType,
} from '@/app/_type/enchantType';
import ItemEnchantTable from './components/item-enchant-table';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import { enchantFilter } from '@/app/_utils/convert';
import { useEnchantPrice } from '@/app/_hooks';
import { getRankCategoryMap } from '@/app/_utils/enchant';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ItemInfoTableCategory from '../iteminfo/components/item-info-table-category';

type SortKey = 'rank' | 'name' | 'affix' | 'average_price' | 'max_price';

type Props = {
  enchants: EnchantOptionType[];
};

export type MergedEnchantType = EnchantOptionType &
  Partial<EnchantFormatingType>;

const EnchantFilterList = ({ enchants }: Props) => {
  const {
    currentCategory,
    currentSubCategory,
    currentSortKey,
    currentSortOrder,
    handleClearAll,
    handleSelectCategory,
    handleSelectSubCategory,
    handleSort,
  } = useCategory('/market/enchant');

  const CATEGORY_MAP = getRankCategoryMap(enchants);
  const [itemName, setItemName] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { isLoading, data: enchantPriceData } = useEnchantPrice();

  const filteredData = useMemo(() => {
    const filterValue = !!currentCategory || !!currentSubCategory;
    return filterValue
      ? enchantFilter(enchants, currentCategory, currentSubCategory)
      : enchants;
  }, [enchants, currentCategory, currentSubCategory]);

  const enchantPriceMap = useMemo(() => {
    if (!enchantPriceData) {
      return new Map<string, EnchantFormatingType>();
    }
    return new Map<string, EnchantFormatingType>(
      enchantPriceData.map((price) => [price.item_name, price])
    );
  }, [enchantPriceData]);

  const mergedData: MergedEnchantType[] = useMemo(() => {
    return filteredData.map((item) => {
      const priceInfo = enchantPriceMap.get(item.name);
      return {
        ...item,
        ...priceInfo,
      };
    });
  }, [filteredData, enchantPriceMap]);

  const sortedEnchants = useMemo(() => {
    return [...mergedData].sort((a, b) => {
      const key = currentSortKey as SortKey;

      const aExists = a[key] !== null && a[key] !== undefined && a[key] !== 0;
      const bExists = b[key] !== null && b[key] !== undefined && b[key] !== 0;

      if (!aExists && bExists) return 1;
      if (aExists && !bExists) return -1;

      const aValue = a[key] ?? 0;
      const bValue = b[key] ?? 0;

      if (aValue < bValue) return currentSortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return currentSortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [mergedData, currentSortKey, currentSortOrder]);

  const renderSortIndicator = (key: string): string | null => {
    if (currentSortKey !== key) return null;
    return currentSortOrder === 'asc' ? ' ▲' : ' ▼';
  };

  const searchItem = sortedEnchants.filter((enchant) =>
    enchant.name.includes(itemName)
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {/* 검색창 */}
        <div className="relative ml-auto block max-w-96 lg:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            onChange={(e) => setItemName(e.target.value)}
            placeholder="아이템 이름 검색"
            className="w-full rounded-md border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
          />
        </div>
        {/* 모바일 카테고리 */}
        <button
          type="button"
          onClick={() => setMobileFilterOpen(true)}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden"
        >
          <SlidersHorizontal className="size-4" />
          <span className="hidden lg:inline">필터</span>
        </button>
      </div>
      <div className="flex min-h-96 gap-4">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-lg border border-border bg-muted/50 p-3">
            {/* PC 카테고리 */}
            <div className="hidden lg:block">
              <ItemInfoTableCategory
                itemCategory={CATEGORY_MAP}
                handleClearAll={handleClearAll}
                handleSelectCategory={handleSelectCategory}
                handleSelectSubCategory={handleSelectSubCategory}
                currentCategory={currentCategory}
                currentSubCategory={currentSubCategory}
              />
            </div>
          </div>
        </aside>
        <main className="flex w-full min-w-0 flex-col gap-2">
          <div className="max-h-[calc(80vh-8rem)] w-full overflow-auto bg-muted/50">
            <ItemEnchantTable
              enchants={searchItem}
              isLoading={isLoading}
              handleSort={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
          </div>
        </main>
      </div>

      {/* 모바일 필터 */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          mobileFilterOpen
            ? 'pointer-events-auto visible'
            : 'pointer-events-none invisible'
        }`}
      >
        <button
          type="button"
          aria-label="필터 닫기"
          onClick={() => setMobileFilterOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            mobileFilterOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-80 max-w-[85%] flex-col bg-zinc-900 p-4 shadow-xl transition-transform duration-300 ease-out ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-1 flex items-center justify-end">
            <button
              type="button"
              aria-label="필터 닫기"
              onClick={() => setMobileFilterOpen(false)}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ItemInfoTableCategory
              itemCategory={CATEGORY_MAP}
              handleClearAll={handleClearAll}
              handleSelectCategory={handleSelectCategory}
              handleSelectSubCategory={handleSelectSubCategory}
              currentCategory={currentCategory}
              currentSubCategory={currentSubCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnchantFilterList;
