import AdBanner from '@/app/_components/adsense/AdBanner';
import CheckError from '@/app/_components/common/check-error';
import { API_PATH } from '@/app/_constant/keyword';
import ItemEnchantTableServer from '@/app/_features/market/components/item-enchant-table-server';
import EnchantFilterList, {
  MergedEnchantType,
} from '@/app/_features/market/enchant-fiter-list';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const enchants = await getApi<MergedEnchantType>(API_PATH.enchantTable, {
    next: { revalidate: 43200 },
  });

  const content =
    enchants.length === 0 ? (
      <CheckError />
    ) : (
      <EnchantFilterList enchants={enchants} />
    );

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <AdBanner />
      <Suspense fallback={<ItemEnchantTableServer enchants={enchants} />}>
        {content}
      </Suspense>
    </div>
  );
};

export default Page;
