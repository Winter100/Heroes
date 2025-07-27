import { Basic, Guild } from '@/app/_type/characterType';
import { mergeAtk } from './character/mergeAtk';
import { translateAndUnifyStats } from './character/translateAndUnifyStats';
import { mergeCharacterData } from './character/mergeCharacterData';
import { Stat } from '../_type/previewType';

export const mergeStats = () => {
  const mergeAtkAndMatk = (stat: { stat: Stat[] }) => {
    return mergeAtk(stat);
  };

  const translatedStats = (mergedAtkStats: Stat[]) => {
    return translateAndUnifyStats(mergedAtkStats);
  };

  const mergedChrarcterData = (
    basic: Basic,
    stats: Stat[],
    guild: Guild = { guild_name: '' }
  ) => {
    return mergeCharacterData(basic, stats, guild);
  };

  return { mergeAtkAndMatk, translatedStats, mergedChrarcterData };
};
