import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemInfoTableCategory from '@/app/_features/iteminfo/components/item-info-table-category';
import { RaidListType } from '@/app/_type/raidType';
import { raidSort } from '@/app/_utils/convert';
import { getRaidCategoryMap } from '@/app/_utils/enchant';
import { getApi } from '@/app/api/getIApi';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 레이드 정보`,
  description: '마영전의 레이드 정보를 제공 합니다.',
};

// export const dynamic = "force-static";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const raidData = await getApi<RaidListType>(API_PATH.raid);
  const sortedRaidData = raidSort(raidData).filter(
    (raid) => raid.raid_name !== '미분류'
  );
  const raidCategoryMap = getRaidCategoryMap(sortedRaidData);

  console.log('테스트중');

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="py-2">
        <AutoResponsiveAd />
      </div>
      <div className="flex h-[860px] gap-2 overflow-y-hidden">
        {/* 왼쪽 카테고리 메뉴 패널 */}
        <RoundedContainer className="flex min-w-64 flex-col gap-4 bg-zinc-900 p-4">
          <Suspense fallback={null}>
            <ItemInfoTableCategory
              itemCategory={raidCategoryMap}
              pathName="/raidinfo"
            />
          </Suspense>
        </RoundedContainer>

        {/* 오른쪽 콘텐츠 영역 (구조 및 사이즈 변경 없음) */}
        <RoundedContainer className="flex h-full w-full flex-col gap-2 overflow-y-auto p-0">
          {children}
        </RoundedContainer>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default layout;
