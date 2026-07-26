'use client';
import { RaidListType } from '@/app/_type/raidType';
import RaidInfoTable from './components/raid-info-table';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import { getRaidCategoryMap } from '@/app/_utils/enchant';
import ItemInfoTableCategory from '../iteminfo/components/item-info-table-category';
import { raidSort } from '@/app/_utils/convert';
type Props = {
  raid: RaidListType[];
};
const RaidInfoContainer = ({ raid }: Props) => {
  const [battleName, setBattledName] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const {
    currentCategory,
    currentSubCategory,
    handleClearAll,
    handleSelectCategory,
    handleSelectSubCategory,
  } = useCategory('/raidinfo');

  const sortRaid = useMemo(() => {
    return raidSort(raid).filter((r) => r.raid_name !== '미분류');
  }, [raid]);

  const RAID_CATEGORY_MAP = getRaidCategoryMap(sortRaid);

  const filterRaid = useMemo(() => {
    if (!currentCategory) {
      return sortRaid;
    }
    return sortRaid.filter((r) => r.raid_name === currentCategory);
  }, [sortRaid, currentCategory]);

  const searchRaid = filterRaid
    .map((raid) => ({
      ...raid,
      monsters: raid.monsters.filter((monster) =>
        monster.battle.includes(battleName)
      ),
    }))
    .filter((raid) => raid.monsters.length > 0);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {/* 검색창 */}
        <div className="relative ml-auto block max-w-96 lg:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            onChange={(e) => setBattledName(e.target.value)}
            placeholder="전투 검색"
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
                itemCategory={RAID_CATEGORY_MAP}
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
            <RaidInfoTable raid={searchRaid} />
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
              itemCategory={RAID_CATEGORY_MAP}
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

export default RaidInfoContainer;
