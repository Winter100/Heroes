import DetailPageLayout from '@/app/_components/layout/detail-page-layout';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import { EnchantOptionType } from '@/app/_type/enchantType';
import EnchantDetail from '@/app/_features/market/components/enchant-detail';
import { Metadata } from 'next';
import { baseUrl } from '@/app/sitemap';
import { getServerDetail } from '@/app/api/getServerDetail';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = false;

type Props = {
  params: Promise<{ enchant: string }>;
};

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
  const decodedName = decodeURIComponent(enchantName);

  const path = `${API_PATH.enchantDetailByName}/${enchantName}`;
  const cacheTag = encodeURI(`${API_PATH.enchantDetailByName}/${decodedName}`);

  const enchant = await getServerDetail<EnchantOptionType>(path, {
    next: { tags: [cacheTag] },
  });

  return (
    <DetailPageLayout>
      <EnchantDetail selectedItem={enchant} />
    </DetailPageLayout>
  );
};

export default Page;
