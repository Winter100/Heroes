// import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH } from '@/app/_constant/keyword';
import { RaidListType } from '@/app/_type/raidType';
import { getApi } from '@/app/api/getIApi';
// import { Suspense } from 'react';

const Page = async () => {
  const raidData = await getApi<RaidListType>(API_PATH.raid);
  if (raidData.length === 0) return <div>0 테스트</div>;
  // const content = <div>테스트</div>;
  return (
    <div className="flex flex-1 flex-col gap-2">
      {/* <RoundedContainer className="h-14 bg-zinc-900 p-4 text-center font-semibold">
        <h1>{`${keyword.project.name} - 레이드 정보`}</h1>
      </RoundedContainer>
      <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 bg-zinc-900 p-0">
        <Suspense fallback={null}>{content}</Suspense>
      </RoundedContainer> */}
    </div>
  );
};

export default Page;

// import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
// import SideAd from '@/app/_components/adsense/SideAd';
// import RoundedContainer from '@/app/_components/layout/RoundedContainer';
// import { API_PATH } from '@/app/_constant/keyword';
// import RaidInformationContainer from '@/app/_features/raidinfo/components/raid-information-container';
// import { RaidListType } from '@/app/_type/raidType';
// import { getApi } from '@/app/api/getIApi';

// const Page = async() => {
//   // const raidData = await getRaidData()
//   return (
//     <>
//       <SideAd dataSlot="2056348937" position="left" />
//       <RoundedContainer>
//         <div className="py-2">
//           <AutoResponsiveAd />
//         </div>
//         <h1 className="text-center text-lg">레이드 정보</h1>
//         <div className="pb-4 text-center text-xs">
//           자세히 버튼을 눌러 상세 정보를 조회할 수 있습니다.
//         </div>
//         <div>
//           {/* <RaidInformationContainer /> */}
//         </div>
//       </RoundedContainer>
//       <SideAd dataSlot="1601053361" position="right" />
//     </>
//   );
// };

// export default Page;

// export const getRaidData = async () => {
//   try {
//     return await getApi<RaidListType>(API_PATH.raid);
//   } catch {
//     return [];
//   }
// };
