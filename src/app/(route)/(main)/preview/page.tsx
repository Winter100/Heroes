import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import PreviewTable from '@/app/_features/preview/components/preview/items/preview-table';
import SideAd from '@/app/_components/adsense/SideAd';
import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';

const Page = async () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <Suspense fallback={<Loading />}>
        <div>
          <div className="py-2">
            <AutoResponsiveAd />
          </div>
          <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
            <CharacterSearchInput
              className="mx-auto w-full max-w-72"
              routeName="preview"
            />
            <div className="flex items-center justify-center md:min-h-[600px]">
              <PreviewTable />
            </div>
          </div>
        </div>
      </Suspense>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
