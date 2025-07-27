import { Stat } from '@/app/_type/previewType';

const statsKeyWord = [
  '공격력',
  '방어력',
  '힘',
  '민첩',
  '지능',
  '의지',
  '행운',
  '최대 생명력',
  '최대 스태미나',
  '공격속도',
  '추가피해',
  '크리티컬',
  '크리티컬 피해량',
  '크리티컬 저항',
  '밸런스',
  '공격력 제한 해제',
  '대항력',
];

export const translateAndUnifyStats = (stats: Stat[]) =>
  statsKeyWord.map((keyword) => {
    const matchedStat = stats.find(
      ({ stat_name }) => stat_name === keyword
    ) || {
      stat_name: keyword,
      stat_value: '0',
    };

    return matchedStat.stat_name === '공격력 제한 해제'
      ? { ...matchedStat, stat_name: '해제' }
      : matchedStat;
  });
