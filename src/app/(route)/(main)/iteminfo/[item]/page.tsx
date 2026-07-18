import { getRecipeData } from '../page';
import { keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import ItemRecipeFind from '@/app/_features/iteminfo/item-recipe-find';
import CheckError from '@/app/_components/common/check-error';

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { item } = await params;

  const decodeName = decodeURIComponent(item);
  const recipes = await getRecipeData();

  const findItem = recipes.find((recipe) => recipe.name === decodeName);

  return {
    title: `${keyword.project.name} ${decodeName}`,
    description: `${decodeName} 제작 재료 및 정보입니다 ${findItem?.description}`,
  };
}

const Page = async ({ params }: Props) => {
  const recipes = await getRecipeData();
  const { item } = await params;
  const decodeName = decodeURIComponent(item);

  if (recipes.length === 0) return <CheckError />;

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
      <RoundedContainer className="h-14 bg-zinc-900 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex h-full min-h-0 flex-col gap-4 bg-zinc-900 p-4">
        <ItemRecipeFind recipes={recipes} findItemName={decodeName} />
      </RoundedContainer>
    </div>
  );
};

export default Page;
