import AdBanner from '@/app/_components/adsense/AdBanner';
import { API_KEY } from '@/app/_constant/keyword';
import ItemEnchantTableServer from '@/app/_features/market/components/item-enchant-table-server';
import EnchantFilterList from '@/app/_features/market/enchant-fiter-list';
import { getServerData } from '@/app/api/getServerData';
import { Suspense } from 'react';

const Page = async () => {
  const enchants = await getServerData(API_KEY.enchantTable);
  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <AdBanner />
      <Suspense fallback={<ItemEnchantTableServer enchants={enchants} />}>
        <EnchantFilterList enchants={enchants} />
      </Suspense>
    </div>
  );
};

export default Page;
