"use client";

import { getStats } from "@/app/_services/getStats";
import { mergeStats } from "@/app/_utils/mergeStats";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import ErrorApi from "../common/error/ErrorApi";

const CharacterStats = ({ ocid }: { ocid: string }) => {
  const { mergeAtkAndMatk, translatedStats } = mergeStats();

  const { data, isLoading, error } = useQuery({
    enabled: !!ocid,
    queryKey: [ocid, "stats"],
    queryFn: () => getStats(ocid ?? ""),
    select: (data) => {
      const mergeAtk = mergeAtkAndMatk(data);
      return translatedStats(mergeAtk);
    },
    staleTime: Infinity,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorApi />;
  }
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
