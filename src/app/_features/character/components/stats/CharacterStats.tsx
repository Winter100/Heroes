'use client';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import Loading from '@/app/_components/common/Loading';
import { useUserStat } from '@/app/_hooks';

const CharacterStats = ({ ocid }: { ocid: string }) => {
  const { data, isLoading, error } = useUserStat(ocid);

  if (isLoading) return <Loading />;
  if (error) return <ErrorApi />;

  return (
    <ul className="grid h-full flex-1 grid-cols-2 items-center gap-2 text-xs">
      {data?.map((s) => (
        <li key={s.stat_name} className="px-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 truncate" title={s.stat_name}>
              • {s.stat_name}
            </div>
            <div>{s.stat_value}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CharacterStats;
