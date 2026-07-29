import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import PreviewTable from '@/app/_features/preview/components/preview/items/preview-table';
import SideAd from '@/app/_components/adsense/SideAd';
import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import { getApi } from '@/app/api/getIApi';
import { API_PATH } from '@/app/_constant/keyword';
import { GrindType, ItemSetType } from '@/app/_type/itemType';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { RaidListType } from '@/app/_type/raidType';

const Page = async () => {
  const [enchants, infusion, grind, itemSetOption, raid] = await Promise.all([
    getApi<EnchantOptionType>(API_PATH.enchant),
    getApi<EnchantOptionType>(API_PATH.infusion),
    getApi<GrindType>(API_PATH.grind),
    getApi<ItemSetType>(API_PATH.itemSetOption),
    getApi<RaidListType>(API_PATH.raid),
  ]);

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <Suspense fallback={<Loading />}>
          <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
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
          </div>
        </Suspense>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
