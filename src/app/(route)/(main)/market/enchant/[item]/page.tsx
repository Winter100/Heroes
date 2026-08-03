import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getApi } from '@/app/api/getIApi';
import EnchantDetail from '@/app/_features/market/components/enchant-detail';
import AdBanner from '@/app/_components/adsense/AdBanner';

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateStaticParams() {
  const enchants = await getApi<EnchantOptionType>(API_PATH.enchant, {
    next: { tags: [API_PATH.enchant] },
  });

  return enchants.map((enchant) => ({
    item: enchant.name,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { item } = await params;

  const decodeName = decodeURIComponent(item);

  return {
    title: `${decodeName} 인챈트 스크롤 | ${keyword.project.name}`,
    description: `${decodeName} 인챈트 효과, 부위, 획득처, 최저/최고 가격을 한눈에 확인하세요. ${keyword.project.name} 인챈트 정보 총정리`,
  };
}

const Page = async ({ params }: Props) => {
  const { item } = await params;

  const enchants = await getApi<EnchantOptionType>(API_PATH.enchant, {
    next: { tags: [API_PATH.enchant] },
  });
  const decodeEnchantName = decodeURIComponent(item);
  const findEnchant = enchants?.find(
    (enchant) => enchant.name === decodeEnchantName
  );

  const content = !findEnchant ? (
    <CheckError text={`${decodeEnchantName}을 찾을 수 없습니다.`} />
  ) : (
    <EnchantDetail selectedItem={findEnchant} />
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
