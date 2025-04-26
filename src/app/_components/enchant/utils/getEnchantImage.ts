import { keyword } from '@/app/_constant/keyword';

const prefix6 = '/images/enchant/prefix6.png';
const prefix7 = '/images/enchant/prefix7.png';
const suffix6 = '/images/enchant/suffix6.png';
const suffix7 = '/images/enchant/suffix7.png';

export const getEnchantImage = (enchantRank: string, upgreadeType: string) => {
  const isPrefix = upgreadeType === keyword.upgreadeType.prefix;

  const rank = Number(enchantRank);
  const isRankValidNumber = !isNaN(rank);

  const src =
    isRankValidNumber && rank <= 6
      ? isPrefix
        ? prefix6
        : suffix6
      : isPrefix
        ? prefix7
        : suffix7;

  return src;
};
