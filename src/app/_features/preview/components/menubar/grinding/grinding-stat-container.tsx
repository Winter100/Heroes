'use client';
import { NewEquipmentType, NewTuning_stat } from '@/app/_type/equipmentType';
import GrindingStat from './grinding-stat';
import { useGrindStore } from '@/app/_store/useGrindStore';
import { calculateNearestProgress } from '@/app/_utils/preview/calculateNearestProgress';
import { isLimitPower } from '@/app/_utils/enchant/utils/isGrindLimit';
import { useEffect } from 'react';

const GrindingStatContainer = ({
  stat_value,
  stat_min_value,
  stat_max_value,
  stat_name,
  stat_one_value,
  item,
}: NewTuning_stat & { item: NewEquipmentType }) => {
  const simulatedValue = useGrindStore(
    (state) =>
      state.simulations[item.item_name]?.grind.after[stat_name] ??
      Number(stat_value)
  );

  const simulationsAfter = useGrindStore(
    (state) => state.simulations[item.item_name]?.grind.after
  );

  const setSimulations = useGrindStore((state) => state.setSimulations);

  const min = Number(stat_min_value);
  const max = Number(stat_max_value);
  const step = Number(stat_one_value);
  const original = Number(stat_value);

  const handleMin = () => {
    setSimulations(item.item_name, stat_name, min, min, max, original);
  };

  const handleMax = () => {
    setSimulations(item.item_name, stat_name, max, min, max, original);
  };

  const handleDecrease = () => {
    setSimulations(
      item.item_name,
      stat_name,
      simulatedValue - step,
      min,
      max,
      original
    );
  };

  const handleIncrease = () => {
    setSimulations(
      item.item_name,
      stat_name,
      simulatedValue + step,
      min,
      max,
      original
    );
  };

  const handleGaugeClick = (percentage: number) => {
    const newValue = calculateNearestProgress(
      percentage,
      stat_max_value,
      stat_one_value
    );
    setSimulations(item.item_name, stat_name, newValue, min, max, original);
  };

  const { increaseValue, minPercentage, reMainPercentage } = getPercentageStat(
    simulatedValue.toString(),
    stat_min_value,
    stat_max_value
  );

  const isActivateOption = isLimitPower(item, simulationsAfter, stat_name);
  const isMin = simulatedValue <= min || !isActivateOption;
  const isMax = stat_name.includes('파괴력')
    ? simulatedValue >= max === isActivateOption
    : simulatedValue >= max;

  useEffect(() => {
    const shouldResetPower =
      item.item_name.includes('오르나') && stat_name === '파괴력';
    const shouldResetPower2 =
      (item.item_name.includes('와드네') ||
        item.item_name.includes('에리우')) &&
      stat_name === '파괴력 2';

    if (
      (shouldResetPower || shouldResetPower2) &&
      !isActivateOption &&
      simulatedValue !== min
    ) {
      setSimulations(item.item_name, stat_name, min, min, max, original);
    }
  }, [
    isActivateOption,
    item.item_name,
    max,
    min,
    original,
    setSimulations,
    simulatedValue,
    stat_name,
  ]);

  return (
    <GrindingStat
      increaseValue={increaseValue}
      minPercentage={minPercentage}
      reMainPercentage={reMainPercentage}
      stat_value={simulatedValue.toString()}
      stat_max_value={stat_max_value}
      stat_name={stat_name}
      isActivateOption={isActivateOption}
      isMin={isMin}
      isMax={isMax}
      onMin={handleMin}
      onMax={handleMax}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      onGaugeClick={handleGaugeClick}
    />
  );
};
export default GrindingStatContainer;

// stat_value는 연마 시뮬레이션으로 인해 변화 되는 수치임.
const getPercentageStat = (
  stat_value: string,
  stat_min_value: string,
  stat_max_value: string
) => {
  const increaseValue = Math.ceil(Number(stat_value) - Number(stat_min_value));

  const minPercentage = Math.ceil(
    (Number(stat_min_value) / Number(stat_max_value)) * 100
  );
  const reMainPercentage = Math.ceil(
    (Number(stat_value) / Number(stat_max_value)) * 100
  );

  return {
    increaseValue,
    minPercentage,
    reMainPercentage,
  };
};
