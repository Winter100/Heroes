import { API_PATH } from '@/app/_constant/keyword';
import ItemFilteredList from '@/app/_features/iteminfo/item-filtered-list';
import { getApi } from '@/app/api/getIApi';
import { ItemRecipe } from '@/app/_type/itemType';
import CheckError from '@/app/_components/common/check-error';
import { Suspense } from 'react';
import ItemRecipeTable from '@/app/_features/iteminfo/components/item-recipe-table';

export const revalidate = false;

const Page = async () => {
  const recipes = await getApi<ItemRecipe>(API_PATH.recipe, {
    next: { tags: [API_PATH.recipe] },
  });

  const content =
    recipes.length === 0 ? (
      <CheckError />
    ) : (
      <ItemFilteredList recipes={recipes} />
    );

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <Suspense fallback={<ItemRecipeTable recipes={recipes} />}>
        {content}
      </Suspense>
    </div>
  );
};

export default Page;
