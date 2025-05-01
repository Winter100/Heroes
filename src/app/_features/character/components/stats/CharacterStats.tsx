'use client';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import Loading from '@/app/_components/common/Loading';
import { useCharacterStats } from '../../hooks/useCharacterStats';

const CharacterStats = ({ ocid }: { ocid: string }) => {
  const { data, isLoading, error } = useCharacterStats(ocid);

  if (isLoading) return <Loading />;
  if (error) return <ErrorApi />;

  return (
    <ul className="grid h-full grid-cols-2 items-center gap-2 text-xs">
      {data?.map((s) => (
        <li key={s.stat_name} className="px-4">
          <div className="flex items-center gap-2">
            <div className="flex-1">• {s.stat_name}</div>
            <div className="">{s.stat_value}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CharacterStats;
