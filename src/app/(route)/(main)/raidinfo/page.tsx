import CheckError from '@/app/_components/common/check-error';
import { API_PATH } from '@/app/_constant/keyword';
import RaidInfoTable from '@/app/_features/raidinfo/components/raid-info-table';
import RaidInfoContainer from '@/app/_features/raidinfo/raid-info-container';
import { RaidListType } from '@/app/_type/raidType';
import { getApi } from '@/app/api/getIApi';
import { Suspense } from 'react';

export const revalidate = false;

const Page = async () => {
  const raidData = await getApi<RaidListType>(API_PATH.raid, {
    next: { tags: [API_PATH.raid] },
  });
  const content =
    raidData.length === 0 ? (
      <CheckError />
    ) : (
      <RaidInfoContainer raid={raidData} />
    );
  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <Suspense fallback={<RaidInfoTable raid={raidData} />}>
        {content}
      </Suspense>
    </div>
  );
};

export default Page;
