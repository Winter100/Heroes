import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { ITEM_CATEGORY_MAP, keyword } from '@/app/_constant/keyword';
import ItemInfoTableCategory from '@/app/_features/iteminfo/components/item-info-table-category';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 아이템 정보`,
  description: '마영전의 아이템 정보를 제공 합니다.',
};

// 레이아웃을 눌렀을때는 iteminfo 또는 /iteminfo?category 형태로 돌아가아햠.
const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <AutoResponsiveAd />
      <div className="flex h-[750px] gap-2">
        {/* 왼쪽 카테고리 메뉴 패널 */}
        <RoundedContainer className="flex min-w-64 flex-col gap-4 bg-zinc-900 p-4">
          <ItemInfoTableCategory
            itemCategory={ITEM_CATEGORY_MAP}
            pathName="/iteminfo"
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

export default layout;
