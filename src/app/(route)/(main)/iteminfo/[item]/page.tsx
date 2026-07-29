import { API_PATH, keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import ItemRecipeFind from '@/app/_features/iteminfo/item-recipe-find';
import CheckError from '@/app/_components/common/check-error';
import { getApi } from '@/app/api/getIApi';
import { ItemRecipe } from '@/app/_type/itemType';

export const revalidate = false;

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateStaticParams() {
  const recipes = await getApi<ItemRecipe>(API_PATH.recipe);

  return recipes.map((recipe) => ({
    item: recipe.name,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { item } = await params;

  const decodeName = decodeURIComponent(item);

  return {
    title: `${keyword.project.name} ${decodeName}`,
    description: `${decodeName} 제작 재료 및 정보를 확인할 수 있습니다.`,
  };
}

const Page = async ({ params }: Props) => {
  const recipes = await getApi<ItemRecipe>(API_PATH.recipe);
  const { item } = await params;
  const decodeName = decodeURIComponent(item);

  const content =
    recipes.length === 0 ? (
      <CheckError />
    ) : (
      <ItemRecipeFind recipes={recipes} findItemName={decodeName} />
    );

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
      <RoundedContainer className="h-14 bg-muted/50 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 p-0">
        {content}
      </RoundedContainer>
    </div>
  );
};

export default Page;
