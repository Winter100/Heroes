import { API_PATH, keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemFilteredList from '@/app/_features/iteminfo/item-filtered-list';
import { Suspense } from 'react';
import { getApi } from '@/app/api/getIApi';
import { ItemRecipe } from '@/app/_type/itemType';
import CheckError from '@/app/_components/common/check-error';

const Page = async () => {
  const recipes = await getRecipeData();

  if (recipes.length === 0) return <CheckError />;

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
      <RoundedContainer className="h-14 bg-zinc-900 p-4 text-center font-semibold">
        <h1>{`${keyword.project.name} - 아이템`}</h1>
      </RoundedContainer>
      <RoundedContainer className="flex h-full min-h-0 flex-col gap-4 overflow-auto bg-zinc-900 p-0">
        <Suspense fallback={null}>
          <ItemFilteredList recipes={recipes} />
        </Suspense>
      </RoundedContainer>
    </div>
  );
};

export default Page;

export const getRecipeData = async () => {
  try {
    return await getApi<ItemRecipe>(API_PATH.recipe);
  } catch {
    return [];
  }
};
