import { API_PATH, keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemFilteredList from '@/app/_features/iteminfo/item-filtered-list';
import { getApi } from '@/app/api/getIApi';
import { ItemRecipe } from '@/app/_type/itemType';
import CheckError from '@/app/_components/common/check-error';
import ItemRecipeTable from '@/app/_features/iteminfo/components/item-recipe-table';
import { Suspense } from 'react';

const Page = async () => {
  const recipes = await getApi<ItemRecipe>(API_PATH.recipe);

  const content =
    recipes.length === 0 ? (
      <CheckError />
    ) : (
      <ItemFilteredList recipes={recipes} />
    );

  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-24 rounded-lg border border-border bg-card p-3">
          인챈트 필터 자리
        </div>
      </aside>
      <main className="min-w-0 flex-1">
        <div className="max-h-[calc(100vh-8rem)] overflow-auto rounded-lg border border-border">
          {content}
        </div>
      </main>
      {/* <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 bg-zinc-900 p-0">
        <Suspense fallback={<ItemRecipeTable recipes={recipes} />}>
          {content}
        </Suspense>
      </RoundedContainer> */}
    </div>
  );
};

export default Page;
// import { API_PATH, keyword } from '@/app/_constant/keyword';
// import RoundedContainer from '@/app/_components/layout/RoundedContainer';
// import ItemFilteredList from '@/app/_features/iteminfo/item-filtered-list';
// import { getApi } from '@/app/api/getIApi';
// import { ItemRecipe } from '@/app/_type/itemType';
// import CheckError from '@/app/_components/common/check-error';
// import ItemRecipeTable from '@/app/_features/iteminfo/components/item-recipe-table';
// import { Suspense } from 'react';

// const Page = async () => {
//   const recipes = await getApi<ItemRecipe>(API_PATH.recipe);

//   const content =
//     recipes.length === 0 ? (
//       <CheckError />
//     ) : (
//       <ItemFilteredList recipes={recipes} />
//     );

//   return (
//     <div className="flex flex-1 flex-col gap-2">
//       <RoundedContainer className="h-14 bg-zinc-900 p-4 text-center font-semibold">
//         <h1>{`${keyword.project.name} - 아이템`}</h1>
//       </RoundedContainer>
//       <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 bg-zinc-900 p-0">
//         <Suspense fallback={<ItemRecipeTable recipes={recipes} />}>
//           {content}
//         </Suspense>
//       </RoundedContainer>
//     </div>
//   );
// };

// export default Page;
