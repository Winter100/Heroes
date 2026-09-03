import { API_PATH, keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import CheckError from '@/app/_components/common/check-error';
import { getApi, getApiV2 } from '@/app/api/getIApi';
import { MonstersType } from '@/app/_type/raidType';
import RaidInfoDetail from '@/app/_features/raidinfo/components/raid-info-detail';
import AdBanner from '@/app/_components/adsense/AdBanner';
import { Metadata } from 'next';
import { baseUrl } from '@/app/sitemap';

export const dynamic = 'force-static';
export const dynamicParams = false;

type Props = {
  params: Promise<{ battle: string }>;
};

export async function generateStaticParams() {
  const raidList = await getApi<string>(API_PATH.raidSSG, {
    next: { tags: [API_PATH.raidSSG] },
  });

  return raidList.map((battle) => ({
    battle,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { battle } = await params;
  const decodeBattleName = decodeURIComponent(battle);

  return {
    title: `${keyword.project.name} ${decodeBattleName}`,
    description: `${decodeBattleName} 레이드 정보 입니다.`,
    alternates: {
      canonical: `${baseUrl}/raidinfo/${encodeURIComponent(battle)}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const { battle } = await params;
  const decodeBattleName = decodeURIComponent(battle);

  const path = `${API_PATH.raidDetailName}/${decodeBattleName}`;
  const raid = await getApiV2<MonstersType>(path, {
    next: { tags: [path] },
  });

  const renderContent = () => {
    if (!raid) {
      return <CheckError text={`${battle}을 찾을 수 없습니다.`} />;
    }

    return <RaidInfoDetail selectedRaid={raid} />;
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
      <AdBanner />
      <RoundedContainer className="h-14 bg-muted/50 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 p-0">
        {renderContent()}
      </RoundedContainer>
    </div>
  );
};

export default Page;
