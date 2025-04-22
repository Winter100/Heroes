import ChracterData from '@/app/_components/character/ChracterData';
import Loading from '@/app/_components/common/Loading';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import PreviewSearchBar from '@/app/_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="dark flex flex-1 flex-col gap-2 p-2">
        <RoundedContainer className="flex h-14 items-center justify-center">
          <PreviewSearchBar className="w-full max-w-72" routeName="character" />
        </RoundedContainer>
        <ChracterData />
      </div>
    </Suspense>
  );
};

export default Page;
