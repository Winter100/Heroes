import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 아이템 정보`,
  description: '마영전의 아이템 정보를 제공 합니다.',
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <SideAd dataSlot="2056348937" position="left" /> */}
      <div className="py-2">{/* <AutoResponsiveAd /> */}</div>
      <div>{children}</div>
      {/* <SideAd dataSlot="1601053361" position="right" /> */}
    </>
  );
};

export default layout;
// import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
// import SideAd from '@/app/_components/adsense/SideAd';
// import RoundedContainer from '@/app/_components/layout/RoundedContainer';
// import { ITEM_CATEGORY_MAP, keyword } from '@/app/_constant/keyword';
// import ItemInfoTableCategory from '@/app/_features/iteminfo/components/item-info-table-category';
// import { Metadata } from 'next';
// import { Suspense } from 'react';

// export const metadata: Metadata = {
//   title: `${keyword.project.name} - 아이템 정보`,
//   description: '마영전의 아이템 정보를 제공 합니다.',
// };

// const layout = async ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <SideAd dataSlot="2056348937" position="left" />
//       <div className="py-2">
//         <AutoResponsiveAd />
//       </div>
//       <div className="flex h-[860px] gap-2 overflow-y-hidden">
//         {/* 왼쪽 카테고리 메뉴 패널 */}
//         <RoundedContainer className="flex min-w-64 flex-col gap-4 bg-zinc-900 p-4">
//           <Suspense fallback={null}>
//             <ItemInfoTableCategory
//               itemCategory={ITEM_CATEGORY_MAP}
//               pathName="/iteminfo"
//             />
//           </Suspense>
//         </RoundedContainer>

//         {/* 오른쪽 콘텐츠 영역 (구조 및 사이즈 변경 없음) */}
//         <RoundedContainer className="flex h-full w-full flex-col gap-2 overflow-y-auto p-0">
//           {children}
//         </RoundedContainer>
//       </div>
//       <SideAd dataSlot="1601053361" position="right" />
//     </>
//   );
// };

// export default layout;
