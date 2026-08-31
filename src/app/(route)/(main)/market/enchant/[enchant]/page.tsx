import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getApi, getApiV2 } from '@/app/api/getIApi';
import EnchantDetail from '@/app/_features/market/components/enchant-detail';
import AdBanner from '@/app/_components/adsense/AdBanner';

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ enchant: string }>;
};

export async function generateStaticParams() {
  const enchants = await getApi<{ id: number; name: string }>(
    API_PATH.enchantSSG,
    {
      next: { tags: [API_PATH.enchantSSG] },
    }
  );

  return enchants.map((enchant) => ({
    enchant: enchant.name,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { enchant } = await params;

  return {
    title: `${enchant} 인챈트 스크롤 | ${keyword.project.name}`,
    description: `${enchant} 인챈트 효과, 부위, 획득처, 최저/최고 가격을 한눈에 확인하세요. ${keyword.project.name} 인챈트 정보 총정리`,
  };
}

const Page = async ({ params }: Props) => {
  const { enchant: enchantName } = await params;
  const path = `${API_PATH.enchantDetailByName}/${enchantName}`;

  const enchant = await getApiV2<EnchantOptionType>(path, {
    next: { tags: [path] },
  });

  const content = !enchant.name ? (
    <CheckError text={`${enchantName}을 찾을 수 없습니다.`} />
  ) : (
    <EnchantDetail selectedItem={enchant} />
  );

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
      <AdBanner />
      <RoundedContainer className="h-14 bg-muted/50 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 p-0">
        {content}
      </RoundedContainer>
    </div>
  );
};

export default Page;
