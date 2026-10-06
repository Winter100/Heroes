import { API_PATH, keyword } from '@/app/_constant/keyword';
import DetailPageLayout from '@/app/_components/layout/detail-page-layout';
import { MonstersType } from '@/app/_type/raidType';
import RaidInfoDetail from '@/app/_features/raidinfo/components/raid-info-detail';
import { Metadata } from 'next';
import { baseUrl } from '@/app/sitemap';
import { getServerDetail } from '@/app/api/getServerDetail';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = false;

type Props = {
  params: Promise<{ battle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { battle } = await params;
  const decodeBattleName = decodeURIComponent(battle);

  return {
    title: `${decodeBattleName} | ${keyword.project.name} `,
    description: `${decodeBattleName}의 빠른 전투 및 상한 정보를 제공합니다`,
    alternates: {
      canonical: `${baseUrl}/raidinfo/${encodeURIComponent(decodeBattleName)}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const { battle } = await params;
  const decodedName = decodeURIComponent(battle);

  const path = `${API_PATH.raidDetailName}/${battle}`;
  const cacheTag = encodeURI(`${API_PATH.raidDetailName}/${decodedName}`);

  const raid = await getServerDetail<MonstersType>(path, {
    next: { tags: [cacheTag] },
  });

  return (
    <DetailPageLayout>
      <RaidInfoDetail selectedRaid={raid} />
    </DetailPageLayout>
  );
};

export default Page;
