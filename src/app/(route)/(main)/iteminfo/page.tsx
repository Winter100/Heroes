import { API_PATH } from '@/app/_constant/keyword';
import ItemFilteredList from '@/app/_features/iteminfo/item-filtered-list';
import { getApi } from '@/app/api/getIApi';
import { ItemRecipes } from '@/app/_type/itemType';
import CheckError from '@/app/_components/common/check-error';
import { Suspense } from 'react';
import ItemRecipeTable from '@/app/_features/iteminfo/components/item-recipe-table';
import AdBanner from '@/app/_components/adsense/AdBanner';

export const dynamic = 'force-static';

const Page = async () => {
  const recipes = await getApi<ItemRecipes>(API_PATH.recipes, {
    next: { tags: [API_PATH.recipes] },
  });

  const content =
    recipes.length === 0 ? (
      <CheckError />
    ) : (
      <ItemFilteredList recipes={recipes} />
    );

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <AdBanner />
      <Suspense fallback={<ItemRecipeTable recipes={recipes} />}>
        {content}
      </Suspense>
    </div>
  );
};

export default Page;
