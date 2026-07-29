import CheckError from '@/app/_components/common/check-error';
import { API_PATH } from '@/app/_constant/keyword';
import ItemEnchantTableServer from '@/app/_features/market/components/item-enchant-table-server';
import EnchantFilterList, {
  MergedEnchantType,
} from '@/app/_features/market/enchant-fiter-list';
import {
  EnchantFormatingType,
  EnchantOptionType,
} from '@/app/_type/enchantType';
import { convertPriceMap, mergeEnchantPriceServer } from '@/app/_utils/convert';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const [enchants, enchantPrice] = await Promise.all([
    getApi<EnchantOptionType>(API_PATH.enchant, {
      next: { tags: [API_PATH.enchant] },
    }),
    getApi<EnchantFormatingType>(API_PATH.enchantPrice, {
      next: { revalidate: 7200 },
    }),
  ]);
  const enchantPriceMap = convertPriceMap(enchantPrice);

  const mergedData: MergedEnchantType[] = mergeEnchantPriceServer(
    enchants,
    enchantPriceMap
  );

  const content =
    enchants.length === 0 ? (
      <CheckError />
    ) : (
      <EnchantFilterList enchants={mergedData} />
    );

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <Suspense fallback={<ItemEnchantTableServer enchants={mergedData} />}>
        {content}
      </Suspense>
    </div>
  );
};

export default Page;
