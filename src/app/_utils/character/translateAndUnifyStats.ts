import { Stat } from '@/app/_type/previewType';

// const statsKeyWord = [
//   '공격력',
//   '방어력',
//   '힘',
//   '민첩',
//   '지능',
//   '의지',
//   '행운',
//   '최대 생명력',
//   '최대 스태미나',
//   '공격속도',
//   '추가피해',
//   '크리티컬',
//   '크리티컬 피해량',
//   '크리티컬 저항',
//   '밸런스',
//   '파괴력',
//   '방어력 관통',
// ];

const STAT_NAME_MAP: { [key: string]: string } = {
  '공격력 제한 해제': '파괴력',
  대항력: '방어력 관통',
};

/**
 * 스탯 배열을 받아 특정 스탯 이름을 통일된 이름으로 바꿈.
 * @param stats - 원본 스탯 배열
 * @returns 번역된 새 스탯 배열
 */
export const translateAndUnifyStats = (stats: Stat[]): Stat[] => {
  return stats.map((stat) => {
    const newName = STAT_NAME_MAP[stat.stat_name];
    if (newName) {
      return { ...stat, stat_name: newName };
    }
    return stat;
  });
};
// export const translateAndUnifyStats = (stats: Stat[]) =>
//   statsKeyWord.map((keyword) => {
//     const matchedStat = stats.find(
//       ({ stat_name }) => stat_name === keyword
//     ) || {
//       stat_name: keyword,
//       stat_value: '0',
//     };

//     return matchedStat.stat_name === '공격력 제한 해제'
//       ? { ...matchedStat, stat_name: '파괴력' }
//       : matchedStat;
//   });
