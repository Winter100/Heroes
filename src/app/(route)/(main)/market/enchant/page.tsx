import CheckError from '@/app/_components/common/check-error';
import { API_PATH } from '@/app/_constant/keyword';
import ItemEnchantTableServer from '@/app/_features/market/components/item-enchant-table-server';
import EnchantFilterList from '@/app/_features/market/enchant-fiter-list';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const enchants = await getApi<EnchantOptionType>(API_PATH.enchant);
  const content =
    enchants.length === 0 ? (
      <CheckError />
    ) : (
      <EnchantFilterList enchants={enchants} />
    );

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <Suspense
        fallback={
          <ItemEnchantTableServer enchants={enchants} isLoading={false} />
        }
      >
        {content}
      </Suspense>
    </div>
  );
};

export default Page;
