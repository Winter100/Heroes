import { API_PATH, keyword } from '@/app/_constant/keyword';
import CheckError from '@/app/_components/common/check-error';
import DetailPageLayout from '@/app/_components/layout/detail-page-layout';
import { getApi, getApiV2 } from '@/app/api/getIApi';
import { ItemRecipes, ItemStaticRecipeType } from '@/app/_type/itemType';
import { notFound, permanentRedirect } from 'next/navigation';
import ItemRecipeDetail from '@/app/_features/iteminfo/components/item-recipe-detail';
import { Metadata } from 'next';
import { baseUrl } from '@/app/sitemap';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = false;

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { item } = await params;
  const itemName = decodeURIComponent(item);
  return {
    title: `${itemName} | ${keyword.project.name} `,
    description: `${itemName} 제작 재료 및 승급 재료와 능력치 정보를 제공합니다.`,
    alternates: {
      canonical: `${baseUrl}/iteminfo/${encodeURIComponent(itemName)}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const { item } = await params;
  const decodedName = decodeURIComponent(item);

  const recipes = await getApi<ItemStaticRecipeType>(API_PATH.recipeSSG, {
    next: { tags: [API_PATH.recipeSSG] },
  });

  const itemId = recipes.find((recipe) => recipe.name === decodedName)?.id;

  if (!itemId) {
    return (
      <DetailPageLayout>
        <CheckError text={`${decodedName}을 찾을 수 없습니다.`} />
      </DetailPageLayout>
    );
  }

  const path = `${API_PATH.recipes}/${itemId}`;

  const recipe = await getApiV2<ItemRecipes>(path, {
    next: { tags: [path] },
  });

  if (!recipe.name) {
    notFound();
  }

  if (decodedName !== recipe.name) {
    permanentRedirect(`/iteminfo/${encodeURIComponent(recipe.name)}`);
  }

  return (
    <DetailPageLayout>
      <ItemRecipeDetail selectedItem={recipe} />
    </DetailPageLayout>
  );
};

export default Page;
