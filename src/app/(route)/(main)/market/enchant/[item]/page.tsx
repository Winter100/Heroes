import EnchantFind from '@/app/_features/market/enchant-find';
import { getEnchantData } from '../page';
import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { Suspense } from 'react';
import { keyword } from '@/app/_constant/keyword';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { item } = await params;

  const decodeName = decodeURIComponent(item);
  const enchants = await getEnchantData();

  const findItem = enchants.find((recipe) => recipe.name === decodeName);

  return {
    title: `${keyword.project.name} ${decodeName} 인챈트 스크롤`,
    description: `${decodeName} 인챈트 스크롤 ${findItem?.effects.map((effect) => effect?.stat_name + '+' + effect?.stat_value)}`,
  };
}

const Page = async ({ params }: Props) => {
  const { item } = await params;
  const enchants = await getEnchantData();

  if (enchants.length === 0) return <CheckError />;

  const decodeEnchantName = decodeURIComponent(item);

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
      <RoundedContainer className="h-14 bg-zinc-900 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex h-full min-h-0 flex-col gap-4 overflow-auto bg-zinc-900 p-0">
        <Suspense fallback={null}>
          <EnchantFind
            enchants={enchants}
            findEnchantName={decodeEnchantName}
          />
        </Suspense>
      </RoundedContainer>
    </div>
  );
};

export default Page;
