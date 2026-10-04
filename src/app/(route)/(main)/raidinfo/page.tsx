import AdBanner from '@/app/_components/adsense/AdBanner';
import { API_KEY } from '@/app/_constant/keyword';
import RaidInfoTable from '@/app/_features/raidinfo/components/raid-info-table';
import RaidInfoContainer from '@/app/_features/raidinfo/raid-info-container';
import { getServerData } from '@/app/api/getServerData';
import { Suspense } from 'react';

const Page = async () => {
  const raidData = await getServerData(API_KEY.raid);
  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <AdBanner />
      <Suspense fallback={<RaidInfoTable raid={raidData} />}>
        <RaidInfoContainer raid={raidData} />
      </Suspense>
    </div>
  );
};

export default Page;
