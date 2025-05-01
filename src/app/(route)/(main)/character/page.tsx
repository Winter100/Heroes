import CharacterSearchInput from '@/app/_components/CharacterSearchInput';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { ChracterInformation } from '@/app/_features/character';

const Page = () => {
  return (
    <BasicContainer className="flex-1 gap-2">
      <CharacterSearchInput
        className="mx-auto h-8 w-full max-w-72"
        routeName="character"
      />
      <ChracterInformation />
    </BasicContainer>
  );
};

export default Page;
