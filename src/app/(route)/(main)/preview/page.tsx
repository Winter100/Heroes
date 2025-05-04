'use client';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import CharacterSearchInput from '@/app/_components/CharacterSearchInput';
import { PreviewBody, PreviewLayout } from '@/app/_features/preview';

const Page = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-2">
      <RoundedContainer className="flex h-14 items-center justify-center">
        <CharacterSearchInput className="w-full max-w-72" routeName="preview" />
      </RoundedContainer>
      <PreviewLayout>
        <PreviewBody />
      </PreviewLayout>
    </div>
  );
};
export default Page;
