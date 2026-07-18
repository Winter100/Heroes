import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { keyword } from '@/app/_constant/keyword';
import ItemInfoTableCategory from '@/app/_features/iteminfo/components/item-info-table-category';
import { Metadata } from 'next';
import { getEnchantData } from './page';
import { getRankCategoryMap } from '@/app/_utils/enchant';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 인챈트 정보`,
  description: '마비노기 영웅전(마영전)의 인챈트 정보 및 거래가를 제공합니다.',
};
// 인챈트 필터 넣어주기

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const enchatns = await getEnchantData();
  const CATEGORY_MAP = getRankCategoryMap(enchatns);

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <AutoResponsiveAd />
      <div className="flex h-[750px] gap-2">
        {/* 왼쪽 카테고리 메뉴 패널 */}
        <RoundedContainer className="flex min-w-64 flex-col gap-4 bg-zinc-900 p-4">
          <ItemInfoTableCategory
            itemCategory={CATEGORY_MAP}
            pathName="/market/enchant"
          />
        </RoundedContainer>

        {/* 오른쪽 콘텐츠 영역 (구조 및 사이즈 변경 없음) */}
        <RoundedContainer className="flex h-full w-full flex-col gap-2 p-0">
          {children}
        </RoundedContainer>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Layout;
