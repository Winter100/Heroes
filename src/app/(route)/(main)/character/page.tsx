import CharacterSearchInput from '@/app/_components/CharacterSearchInput';
import Loading from '@/app/_components/common/Loading';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { ChracterInformation } from '@/app/_features/character';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BasicContainer className="flex-1 gap-2">
        <CharacterSearchInput
          className="mx-auto h-8 w-full max-w-72"
          routeName="character"
        />
        <ChracterInformation />
      </BasicContainer>
    </Suspense>
  );
};

export default Page;
