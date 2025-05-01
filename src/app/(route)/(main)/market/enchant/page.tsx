import { insertUpgradeType } from '@/app/_components/enchant/utils/insertUpgradeType';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import Column from '@/app/_components/layout/Column';
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { keyword } from '@/app/_constant/keyword';
import {
  EnchantDropAndDetail,
  EnchantRankTable,
  EnchantTableInputFilter,
} from '@/app/_features/market';

const Page = () => {
  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  return (
    <BasicContainer className="p-2 lg:mt-10">
      <div className="mx-auto flex w-full max-w-md flex-col flex-wrap justify-center gap-3 rounded-md border-borderColor/50 p-2 md:max-w-5xl md:flex-row md:p-6 lg:p-10">
        <Column className="z-10 max-w-md">
          <EnchantRankTable enchantData={allEnchantList} />
          <EnchantTableInputFilter />
        </Column>
        <EnchantDropAndDetail />
      </div>
      <div className="my-4 hidden text-center text-xs sm:block">
        거래량이 적은 인챈트는 가격 정보가 표시되지 않습니다
      </div>
    </BasicContainer>
  );
};

export default Page;
