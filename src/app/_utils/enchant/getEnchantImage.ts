import { AFFIX } from '@/app/_constant/keyword';
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
  const isPrefix = upgradeType === AFFIX.prefix;

  const rank = Number(enchantRank);
  const isRankValidNumber = !isNaN(rank);

  if (!isRankValidNumber) {
    if (isPrefix) return prefix7;
    return suffix7;
  }

  if (isPrefix) return rank <= ENCHANT_DESTRUCTION_RANK ? prefix6 : prefix7;
  return rank <= ENCHANT_DESTRUCTION_RANK ? suffix6 : suffix7;
};
