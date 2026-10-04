import AdBanner from '@/app/_components/adsense/AdBanner';
import SideAd from '@/app/_components/adsense/SideAd';
import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import Loading from '@/app/_components/common/Loading';
import { API_KEY } from '@/app/_constant/keyword';
import CharacterInformationContainer from '@/app/_features/character/components/information/character-information-container';
import { getServerData } from '@/app/api/getServerData';
import { Suspense } from 'react';

const Page = async () => {
  const [enchants, infusion, itemSetOption, grind, character] =
    await Promise.all([
      getServerData(API_KEY.enchant),
      getServerData(API_KEY.infusion),
      getServerData(API_KEY.itemSetOption),
      getServerData(API_KEY.grind),
      getServerData(API_KEY.characterImage),
    ]);

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <AdBanner />
        <Suspense fallback={<Loading />}>
          <div className="mx-auto w-full max-w-7xl gap-6 px-4 py-6 sm:px-6">
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
