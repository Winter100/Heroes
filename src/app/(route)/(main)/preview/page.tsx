import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import PreviewTable from '@/app/_features/preview/components/preview/items/preview-table';
import SideAd from '@/app/_components/adsense/SideAd';
import { getApi } from '@/app/api/getIApi';
import { API_PATH } from '@/app/_constant/keyword';
import { GrindType, ItemSetType } from '@/app/_type/itemType';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { RaidListType } from '@/app/_type/raidType';
import AdBanner from '@/app/_components/adsense/AdBanner';

const Page = async () => {
  const [enchants, infusion, grind, itemSetOption, raid] = await Promise.all([
    getApi<EnchantOptionType>(API_PATH.enchant, {
      next: { tags: [API_PATH.enchant] },
    }),
    getApi<EnchantOptionType>(API_PATH.infusion, {
      next: { tags: [API_PATH.infusion] },
    }),
    getApi<GrindType>(API_PATH.grind, {
      next: { tags: [API_PATH.grind] },
    }),
    getApi<ItemSetType>(API_PATH.itemSetOption, {
      next: { tags: [API_PATH.itemSetOption] },
    }),
    getApi<RaidListType>(API_PATH.raid, {
      next: { tags: [API_PATH.raid] },
    }),
  ]);

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
        <AdBanner />
        <Suspense fallback={<Loading />}>
          <CharacterSearchInput
            className="mx-auto mb-2 w-full max-w-72"
            routeName="preview"
          />
          <div className="flex items-center justify-center md:min-h-[600px]">
            <PreviewTable
              enchants={enchants}
              infusion={infusion}
              grind={grind}
              itemSetOption={itemSetOption}
              raid={raid}
            />
          </div>
        </Suspense>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
