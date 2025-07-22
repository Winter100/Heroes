export const calculateNearestProgress = (
  percentage: number,
  maxValue: string,
  oneValue: string
) => {
  const max = Number(maxValue);
  const step = Number(oneValue);
  const targetValue = max * (percentage / 100);
  const nearestProgress = Math.round(targetValue / step) * step;
  return Math.min(nearestProgress, max);
};
