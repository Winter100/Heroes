import EnchantFind from '@/app/_features/market/enchant-find';
import CheckError from '@/app/_components/common/check-error';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { API_PATH, keyword } from '@/app/_constant/keyword';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { getApi } from '@/app/api/getIApi';

type Props = {
  params: Promise<{ item: string }>;
};

export async function generateStaticParams() {
  const enchants = await getApi<EnchantOptionType>(API_PATH.enchant);

  return enchants.map((enchant) => ({
    item: enchant.name,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { item } = await params;

  const decodeName = decodeURIComponent(item);

  return {
    title: `${keyword.project.name} ${decodeName} 인챈트 스크롤`,
    description: `${decodeName} 인챈트 스크롤의 효과 및 얻는 곳 정보입니다.`,
  };
}

const Page = async ({ params }: Props) => {
  const { item } = await params;
  const enchants = await getApi<EnchantOptionType>(API_PATH.enchant);

  const decodeEnchantName = decodeURIComponent(item);

  const content =
    enchants.length === 0 ? (
      <CheckError />
    ) : (
      <EnchantFind enchants={enchants} findEnchantName={decodeEnchantName} />
    );

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden">
      <RoundedContainer className="h-14 bg-zinc-900 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex h-full min-h-0 flex-col gap-4 overflow-auto bg-zinc-900 p-0">
        {content}
      </RoundedContainer>
    </div>
  );
};

export default Page;
