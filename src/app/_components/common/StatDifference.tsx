interface StatDifferenceProps {
  stat: number | null;
}
const StatDifference = ({ stat }: StatDifferenceProps) => {
  return (
    <p
      className={`flex items-center justify-center text-[11px] md:text-xs ${
        stat !== null
          ? stat! > 0
            ? 'text-green-300'
            : stat! < 0
              ? 'text-red-300'
              : ''
          : ''
      }`}
    >
      {stat ? stat : ''}
    </p>
  );
};

export default StatDifference;
