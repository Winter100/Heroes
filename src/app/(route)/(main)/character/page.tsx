import SideAd from '@/app/_components/adsense/SideAd';
import CharacterSearchInput from '@/app/_components/CharacterSearchInput';
import Loading from '@/app/_components/common/Loading';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { CharacterInformation } from '@/app/_features/character';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer className="flex-1 gap-2">
        <CharacterSearchInput
          className="mx-auto h-8 w-full max-w-72"
          routeName="character"
        />
        <CharacterInformation />
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </Suspense>
  );
};

export default Page;
