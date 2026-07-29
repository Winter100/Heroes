import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import Loading from '@/app/_components/common/Loading';
import { API_PATH } from '@/app/_constant/keyword';
import CharacterInformationContainer from '@/app/_features/character/components/information/character-information-container';
import { CharacterInfo } from '@/app/_type/characterType';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { GrindType, ItemSetType } from '@/app/_type/itemType';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

const Page = async () => {
  const [enchants, infusion, itemSetOption, grind, character] =
    await Promise.all([
      getApi<EnchantOptionType>(API_PATH.enchant),
      getApi<EnchantOptionType>(API_PATH.infusion),
      getApi<ItemSetType>(API_PATH.itemSetOption),
      getApi<GrindType>(API_PATH.grind),
      getApi<CharacterInfo>(API_PATH.character),
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
              routeName="character"
            />
            <div className="flex items-center justify-center md:min-h-[600px]">
              <CharacterInformationContainer
                enchants={enchants}
                infusion={infusion}
                itemSetOption={itemSetOption}
                grind={grind}
                character={character}
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
