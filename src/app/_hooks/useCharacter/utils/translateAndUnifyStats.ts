import { statsKeyWord } from '@/app/_constant/stats';
import { Stat } from '@/app/_type/previewType';

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
