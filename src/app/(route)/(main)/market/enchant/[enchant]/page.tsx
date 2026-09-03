import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getApi, getApiV2 } from '@/app/api/getIApi';
import EnchantDetail from '@/app/_features/market/components/enchant-detail';
import AdBanner from '@/app/_components/adsense/AdBanner';
import { Metadata } from 'next';
import { baseUrl } from '@/app/sitemap';

export const dynamic = 'force-static';
export const dynamicParams = false;

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { enchant: enchantName } = await params;
  const decodeEnchant = decodeURIComponent(enchantName);

  return {
    title: `${decodeEnchant} 인챈트 스크롤 | ${keyword.project.name}`,
    description: `${decodeEnchant} 인챈트 효과, 부위, 획득처, 최저/최고 가격을 한눈에 확인하세요. ${keyword.project.name} 인챈트 정보 총정리`,
    alternates: {
      canonical: `${baseUrl}/market/enchant/${encodeURIComponent(decodeEnchant)}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const { enchant: enchantName } = await params;
  const decodeEnchant = decodeURIComponent(enchantName);
  const path = `${API_PATH.enchantDetailByName}/${decodeEnchant}`;

  const enchant = await getApiV2<EnchantOptionType>(path, {
    next: { tags: [path] },
  });

  const content = !enchant.name ? (
    <CheckError text={`${decodeEnchant}을 찾을 수 없습니다.`} />
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
