import { getStats } from '@/app/_services/getStats';
import { mergeStats } from '@/app/_utils/mergeStats';
import { useQuery } from '@tanstack/react-query';

/**
 *
 * @param ocid
 * 캐릭터의 스탯을 받아오고 능력치 이름을 변경해서 리턴
 * 1. "마법 공격력" -> "공격력" (둘중 큰 값이 공격력으로 리턴)
 * 2. "공격력 제한 해제" -> "해제"
 */
export const useCharacterStats = (ocid: string) => {
  const { mergeAtkAndMatk, translatedStats } = mergeStats();

  return useQuery({
    enabled: !!ocid,
    queryKey: [ocid, 'stats'],
    queryFn: () => getStats(ocid ?? ''),
    select: (data) => {
      const mergeAtk = mergeAtkAndMatk(data);
      return translatedStats(mergeAtk);
    },
    staleTime: Infinity,
  });
};
