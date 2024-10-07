import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useOcid } from "../useOcid/useOcid";
import { getStats } from "@/app/_services/getStats";
import { mergeStats } from "@/app/_utils/mergeStats";
import { usePreviewStore } from "@/app/_store/previewStore";
import { combineStats } from "@/app/_components/preview/utils/combineStats";
import { someStats } from "@/app/_components/preview/utils/someStats";
import { Stat } from "@/app/_type/previewType";
import { calculateStatsDifference } from "@/app/_components/preview/utils/calculateStatsDifference";

export const useStats = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { mergeAtkAndMatk, translatedStats } = mergeStats();
  const { data, isLoading, error } = useQuery({
    enabled: !!ocid,
    queryKey: [ocid, "스텟"],
    queryFn: () => getStats(ocid ?? ""),
    select: (data) => {
      const mergeAtk = mergeAtkAndMatk(data);
      return translatedStats(mergeAtk);
    },
    staleTime: 10 * 1000,
  });

  const afterStats = usePreviewStore((state) => state.afterStats);
  const beforeStats = usePreviewStore((state) => state.beforeStats);

  const setPreviewAllStats = usePreviewStore(
    (state) => state.setPreviewAllStats,
  );

  const combineAfterStat = combineStats(afterStats);
  const combineBeforeStats = combineStats(beforeStats);

  const before = Object.keys(combineBeforeStats).map((key) => ({
    stat_name: key,
    stat_value:
      combineBeforeStats[key] !== null
        ? combineBeforeStats[key].toString()
        : null,
  }));

  const after = Object.keys(combineAfterStat).map((key) => ({
    stat_name: key,
    stat_value:
      combineAfterStat[key] !== null ? combineAfterStat[key].toString() : null,
  }));

  const mergedStats =
    data && someStats(data, before as Stat[], after as Stat[]);
  const statDifference =
    mergedStats && calculateStatsDifference(mergedStats, data);

  useEffect(() => {
    mergedStats && setPreviewAllStats(mergedStats as Stat[]);
  }, [mergedStats, setPreviewAllStats]);

  return { data, isLoading, error, mergedStats, statDifference };
};
