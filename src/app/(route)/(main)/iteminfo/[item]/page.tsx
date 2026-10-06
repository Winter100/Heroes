import { API_PATH, keyword } from '@/app/_constant/keyword';
import DetailPageLayout from '@/app/_components/layout/detail-page-layout';
import { ItemRecipes } from '@/app/_type/itemType';
import ItemRecipeDetail from '@/app/_features/iteminfo/components/item-recipe-detail';
import { Metadata } from 'next';
import { baseUrl } from '@/app/sitemap';
import { getServerDetail } from '@/app/api/getServerDetail';

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

  const path = `${API_PATH.recipeByItemName}/${item}`;
  const cacheTag = encodeURI(`${API_PATH.recipeByItemName}/${decodedName}`);

  const recipe = await getServerDetail<ItemRecipes>(path, {
    next: { tags: [cacheTag] },
  });

  return (
    <DetailPageLayout>
      <ItemRecipeDetail selectedItem={recipe} />
    </DetailPageLayout>
  );
};

export default Page;
