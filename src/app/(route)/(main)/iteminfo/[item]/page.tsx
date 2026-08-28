import { API_PATH, keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import { getApi, getApiV2 } from '@/app/api/getIApi';
import { ItemRecipes, ItemStaticRecipeType } from '@/app/_type/itemType';
import AdBanner from '@/app/_components/adsense/AdBanner';
import { parseItemSlug } from '@/app/_utils/convert';
import { notFound, redirect } from 'next/navigation';
import ItemRecipeDetail from '@/app/_features/iteminfo/components/item-recipe-detail';

export const dynamic = 'force-static';
export const dynamicParams = false;

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateStaticParams() {
  const recipes = await getApi<ItemStaticRecipeType>(API_PATH.recipeSSG, {
    next: { tags: [API_PATH.recipeSSG] },
  });

  return recipes.map((recipe) => ({
    item: recipe.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { item } = await params;
  const parseItem = parseItemSlug(item);
  if (!parseItem?.itemId) return null;

  const path = `${API_PATH.recipes}/${parseItem.itemId}`;
  const { name } = await getApiV2<ItemRecipes>(path, {
    next: { tags: [path] },
  });

  return {
    title: `${keyword.project.name} ${name}`,
    description: `${name} 제작 재료 및 승급 재료와 능력치 정보를 제공합니다.`,
  };
}

const Page = async ({ params }: Props) => {
  const { item } = await params;
  const parsed = parseItemSlug(item);

  if (!parsed) {
    notFound();
  }

  const { itemId, itemName: slugItemName } = parsed;

  const path = `${API_PATH.recipes}/${itemId}`;
  const recipe = await getApiV2<ItemRecipes>(path, {
    next: { tags: [path] },
  });

  if (!recipe || !recipe.name) {
    notFound();
  }

  if (slugItemName !== recipe.name) {
    redirect(`/iteminfo/${itemId}-${encodeURIComponent(recipe.name)}`);
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
      <AdBanner />
      <RoundedContainer className="h-14 bg-muted/50 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 p-0">
        <ItemRecipeDetail selectedItem={recipe} />
      </RoundedContainer>
    </div>
  );
};

export default Page;
