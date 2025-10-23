import { useRankStore } from '@/app/_store/rankStore';
import { useCharacterStore } from '../../store/characterStore';
import { limitCalculator } from '@/app/_utils/raid/limitCalculator';
import { LimitStatProps } from '../../types';

const LimitStat = (props: LimitStatProps) => {
  const selectedBoss = props.selectedBoss;
  const statName = props.stat_name;
  const statValue = props.stat_value;
  const characterName = props.characterName;

  const rankTitleList = useRankStore((state) => state?.rankTitleList);
  const isLimit = rankTitleList.find((t) => t.stat_name === '파괴력')?.isView;

  const limitValue = useCharacterStore((state) => {
    if (isLimit) {
      return (
        state?.characters
          .find((c) => c?.name === characterName)
          ?.stat.find((i) => i.stat_name === '파괴력')?.stat_value ?? '0'
      );
    }
    return '0';
  });

  const stat = limitCalculator(
    selectedBoss,
    '상한',
    statName,
    statValue?.toString()
    // limitValue?.toString()
  );

  if (statName === '파괴력') {
    return (
      <span
        className={`block text-center text-[10px] ${Number(stat) >= 0 ? 'text-green-300' : 'text-red-300'} `}
      >
        {limitValue}
      </span>
    );
  }

  return (
    <>
      {stat !== undefined && (
        <span
          className={`block text-center text-[10px] ${Number(stat) >= 0 ? 'text-green-300' : 'text-red-300'} `}
        >
          {stat !== null && stat >= 0 ? `+${stat}` : stat}
        </span>
      )}
    </>
  );
};

export default LimitStat;
