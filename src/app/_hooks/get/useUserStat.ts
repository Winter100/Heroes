'use client';
import { useQuery } from '@tanstack/react-query';
import { getStats } from '../../_services/getStats';
import {
  transformAtkLimitAndForce,
  transformHighAttack,
} from '../../_utils/character';
import { Stat } from '../../_type/previewType';

/**
 * 유저의 스탯 정보를 조회합니다.
 *
 * (추가로 공격력 제한 해제, 대항력의 능력치 이름을 변경하고 공격력과 마법공격력 중 더 높은 스탯의 값을 공격력으로 남긴 후 반환합니다.)
 *
 * @param ocid
 * @returns 유저 스탯
 */
export const useUserStat = (ocid: string) => {
  return useQuery<{ stat: Stat[] }, Error, Stat[]>({
    enabled: !!ocid,
    queryKey: [ocid, 'stats'],
    queryFn: () => getStats(ocid ?? ''),
    select: (data) => {
      const transformedStats = transformHighAttack(data);
      return transformAtkLimitAndForce(transformedStats);
    },
    staleTime: Infinity,
  });
};
