import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import Loading from '@/app/_components/common/Loading';
import CharacterInformationContainer from '@/app/_features/character/components/information/character-information-container';
import { Suspense } from 'react';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
          <Suspense fallback={<Loading />}>
            <CharacterSearchInput
              className="mx-auto mb-2 h-8 w-full max-w-72"
              routeName="character"
            />
            <CharacterInformationContainer />
          </Suspense>
        </div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
