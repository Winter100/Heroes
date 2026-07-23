import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemInfoTableCategoryMobile from '@/app/_features/iteminfo/components/item-info-table-category-mobile';
import ItemEnchantTableServer from '@/app/_features/market/components/item-enchant-table-server';
import EnchantFilterList from '@/app/_features/market/enchant-fiter-list';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getRankCategoryMap } from '@/app/_utils/enchant';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const enchants = await getApi<EnchantOptionType>(API_PATH.enchant);
  const CATEGORY_MAP = getRankCategoryMap(enchants);
  const content =
    enchants.length === 0 ? (
      <CheckError />
    ) : (
      <EnchantFilterList enchants={enchants} />
    );

  // Todo 반응형 수정하기
  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
      <RoundedContainer className="relative h-14 bg-zinc-900 p-4 text-center font-semibold">
        <Suspense fallback={null}>
          <div className="absolute left-4 top-1/2 block -translate-y-1/2 md:hidden">
            <ItemInfoTableCategoryMobile
              itemCategory={CATEGORY_MAP}
              pathName="/market/enchant"
            />
          </div>
        </Suspense>
        <h1>{`${keyword.project.name} - 인챈트`}</h1>
      </RoundedContainer>
      <RoundedContainer className="flex h-full min-h-0 flex-col gap-4 overflow-auto bg-zinc-900 p-0">
        <Suspense
          fallback={
            <ItemEnchantTableServer enchants={enchants} isLoading={false} />
          }
        >
          {content}
        </Suspense>
      </RoundedContainer>
    </div>
  );
};

export default Page;
