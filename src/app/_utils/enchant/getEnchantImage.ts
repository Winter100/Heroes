import { keyword } from '@/app/_constant/keyword';
import { ENCHANT_DESTRUCTION_RANK } from '@/app/_type/enchantType';

const prefix6 = '/images/enchant/prefix6.png';
const prefix7 = '/images/enchant/prefix7.png';
const suffix6 = '/images/enchant/suffix6.png';
const suffix7 = '/images/enchant/suffix7.png';
const infusion = '/images/enchant/infusion.png';

/**
 * - 인챈트 기본 이미지 리턴 해주는 함수
 * @param enchantRank
 * @param upgradeType
 * @returns
 */
export const getEnchantImage = (enchantRank: string, upgradeType: string) => {
  if (upgradeType === 'infusion') return infusion;
  const isPrefix = upgradeType === keyword.upgradeType.prefix;

  const rank = Number(enchantRank);
  const isRankValidNumber = !isNaN(rank);

  const src =
    isRankValidNumber && rank <= ENCHANT_DESTRUCTION_RANK
      ? isPrefix
        ? prefix6
        : suffix6
      : isPrefix
        ? prefix7
        : suffix7;

  return src;
};
