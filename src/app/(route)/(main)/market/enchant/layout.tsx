import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemInfoTableCategory from '@/app/_features/iteminfo/components/item-info-table-category';
import { Metadata } from 'next';
import { getRankCategoryMap } from '@/app/_utils/enchant';
import { getApi } from '@/app/api/getIApi';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { Suspense } from 'react';
import { EnchantFilters } from '@/app/_features/market/enchant-filter';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 인챈트 정보`,
  description: '마비노기 영웅전(마영전)의 인챈트 정보 및 거래가를 제공합니다.',
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const enchatns = await getApi<EnchantOptionType>(API_PATH.enchant);
  const CATEGORY_MAP = getRankCategoryMap(enchatns);

  // 반응형 수정하기
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div className="flex h-[860px] gap-2 overflow-y-hidden">
          {/* 왼쪽 카테고리 메뉴 패널 */}
          <RoundedContainer className="hidden w-64 flex-col gap-4 bg-zinc-900 p-4 md:flex">
            <Suspense fallback={null}>
              <ItemInfoTableCategory
                itemCategory={CATEGORY_MAP}
                pathName="/market/enchant"
              />
            </Suspense>
          </RoundedContainer>

          {/* 오른쪽 콘텐츠 영역 (구조 및 사이즈 변경 없음) */}
          <RoundedContainer className="flex h-full w-full flex-col gap-2 overflow-y-auto p-0 px-2 md:px-0">
            {children}
          </RoundedContainer>
        </div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Layout;
