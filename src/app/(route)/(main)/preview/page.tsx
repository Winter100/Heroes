import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import { PreviewBody, PreviewLayout } from '@/app/_features/preview';
import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import SideAd from '@/app/_components/adsense/SideAd';
import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-1 flex-col gap-2 p-2">
          <AutoResponsiveAd />
          <CharacterSearchInput
            className="mx-auto w-full max-w-72"
            routeName="preview"
          />
          <PreviewLayout>
            <PreviewBody />
          </PreviewLayout>
        </div>
      </Suspense>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
