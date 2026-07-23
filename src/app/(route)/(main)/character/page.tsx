import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import Loading from '@/app/_components/common/Loading';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import CharacterInformationContainer from '@/app/_features/character/components/information/character-information-container';
import { Suspense } from 'react';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer className="dark flex-1 gap-2">
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <Suspense fallback={<Loading />}>
          <CharacterSearchInput
            className="mx-auto h-8 w-full max-w-72"
            routeName="character"
          />
          <CharacterInformationContainer />
        </Suspense>
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
