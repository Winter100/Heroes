import { limitCalculator } from '@/app/_utils/raid/limitCalculator';
import { CalculatorStatProps } from '@/app/_features/preview/types';
import { memo } from 'react';

const CalculatorStat = memo(
  ({
    bossData,
    filter,
    // limitValue,
    stat_name,
    stat_value,
  }: CalculatorStatProps) => {
    const stats = limitCalculator(
      bossData,
      filter,
      stat_name,
      stat_value?.toString()
      // limitValue?.toString()
    );

    return (
      <p
        className={`flex h-4 items-center justify-center text-[10px] ${
          stats !== null
            ? stats! > 0
              ? 'text-green-300'
              : stats! < 0
                ? 'text-red-300'
                : ''
            : ''
        }`}
      >
        {stats ? stats : ''}
      </p>
    );
  }
);

export default CalculatorStat;

CalculatorStat.displayName = 'CalculatorStat';
