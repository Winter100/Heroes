import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import EnchantFilterList from '@/app/_features/market/enchant-fiter-list';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const enchants = await getEnchantData();

  const content =
    enchants.length === 0 ? (
      <CheckError />
    ) : (
      <EnchantFilterList enchants={enchants} />
    );

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
      <RoundedContainer className="h-14 bg-zinc-900 p-4 text-center font-semibold">
        <h1>{`${keyword.project.name} - 인챈트`}</h1>
      </RoundedContainer>
      <RoundedContainer className="flex h-full min-h-0 flex-col gap-4 overflow-auto bg-zinc-900 p-0">
        <Suspense fallback={null}>{content}</Suspense>
      </RoundedContainer>
    </div>
  );
};

export default Page;

export const getEnchantData = async () => {
  try {
    return await getApi<EnchantOptionType>(API_PATH.enchant);
  } catch {
    return [];
  }
};
