import CharacterSearchInput from '@/app/_components/common/CharacterSearchInput';
import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import PreviewTable from '@/app/_features/preview/components/preview/items/preview-table';
import SideAd from '@/app/_components/adsense/SideAd';
import { API_KEY } from '@/app/_constant/keyword';
import AdBanner from '@/app/_components/adsense/AdBanner';
import { getServerData } from '@/app/api/getServerData';

const Page = async () => {
  const [enchants, infusion, grind, itemSetOption, raid, partholn] =
    await Promise.all([
      getServerData(API_KEY.enchant),
      getServerData(API_KEY.infusion),
      getServerData(API_KEY.grind),
      getServerData(API_KEY.itemSetOption),
      getServerData(API_KEY.raid),
      getServerData(API_KEY.partholn),
    ]);

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="mx-auto w-full max-w-7xl gap-6 px-4 py-6 sm:px-6">
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
              partholn={partholn}
            />
          </div>
        </Suspense>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
