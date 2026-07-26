import { API_PATH, keyword } from '@/app/_constant/keyword';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import CheckError from '@/app/_components/common/check-error';
import { getApi } from '@/app/api/getIApi';
import { RaidListType } from '@/app/_type/raidType';
import RaidInfoDetail from '@/app/_features/raidinfo/components/raid-info-detail';

type Props = {
  params: Promise<{ battle: string }>;
};

export async function generateStaticParams() {
  const raidList = await getApi<RaidListType>(API_PATH.raid);
  const battleList = [
    ...new Set(raidList.flatMap((raid) => raid.monsters.map((r) => r.battle))),
  ];

  return battleList.map((battle) => ({
    battle,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { battle } = await params;

  const decodeName = decodeURIComponent(battle);

  return {
    title: `${keyword.project.name} ${decodeName}`,
    description: `${decodeName} 레이드 정보 입니다.`,
  };
}

const Page = async ({ params }: Props) => {
  const raidList = await getApi<RaidListType>(API_PATH.raid);
  const { battle } = await params;
  const decodeName = decodeURIComponent(battle);

  const targetMonster = raidList
    .flatMap((r) => r.monsters)
    .find((b) => b.battle === decodeName);

  const renderContent = () => {
    if (raidList.length === 0) {
      return <CheckError />;
    }

    if (!targetMonster) {
      return <CheckError text={`${decodeName}을 찾을 수 없습니다.`} />;
    }

    return <RaidInfoDetail selectedRaid={targetMonster} />;
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
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
