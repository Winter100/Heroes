import { API_KEY } from '@/app/_constant/keyword';
import ItemFilteredList from '@/app/_features/iteminfo/item-filtered-list';
import { Suspense } from 'react';
import ItemRecipeTable from '@/app/_features/iteminfo/components/item-recipe-table';
import AdBanner from '@/app/_components/adsense/AdBanner';
import { getServerData } from '@/app/api/getServerData';

const Page = async () => {
  const recipes = await getServerData(API_KEY.recipes);

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <AdBanner />
      <Suspense fallback={<ItemRecipeTable recipes={recipes} />}>
        <ItemFilteredList recipes={recipes} />
      </Suspense>
    </div>
  );
};

export default Page;
