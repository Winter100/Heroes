'use client';
import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import PreviewLayout from '@/app/_components/preview/layout/PreviewLayout';
import PreviewBody from '@/app/_components/preview/content/PreviewBody';
import PreviewSearchBar from '@/app/_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-1 flex-col gap-2 p-2">
        <RoundedContainer className="flex h-14 items-center justify-center">
          <PreviewSearchBar className="w-full max-w-72" routeName="preview" />
        </RoundedContainer>
        <PreviewLayout>
          <PreviewBody />
        </PreviewLayout>
      </div>
    </Suspense>
  );
};
export default Page;
