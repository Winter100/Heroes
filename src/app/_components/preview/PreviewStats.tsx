"use client";

import { useEffect } from "react";

import { useStats } from "@/app/_hooks/useStats/useStats";
import { usePreviewStore } from "@/app/_store/previewStore";
import Loading from "../common/Loading";

import Column from "../layout/Column";
import Row from "../layout/Row";

import { someStats } from "./utils/someStats";
import { calculateStatsDifference } from "./utils/calculateStatsDifference";
import { combineStats } from "./utils/combineStats";
import { Stat } from "@/app/_type/previewType";
import AvgPrice from "./AvgPrice";
import PreviewStatsBox from "./components/PreviewStatsBox";

const PreviewStats = ({ name }: { name: string }) => {
  const afterStats = usePreviewStore((state) => state.afterStats);
  const beforeStats = usePreviewStore((state) => state.beforeStats);
  const setPreviewAllStats = usePreviewStore(
    (state) => state.setPreviewAllStats,
  );

  const { data, isLoading } = useStats(name);
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
  }, [mergedStats]);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading width="10" height="10" />
      </div>
    );
  }

  return (
    <>
      <Column className="h-full gap-1 text-xs">
        <Row className="min-h-6 items-center justify-center text-sm font-semibold">
          {name}
        </Row>
        <>
          <PreviewStatsBox
            className="h-full flex-1 rounded-lg border border-gray-600 bg-zinc-800 p-2 text-white"
            stats={data ?? []}
          />
        </>
        <>
          <PreviewStatsBox
            isTitle={true}
            className="h-full flex-1 rounded-lg border border-gray-600 bg-zinc-800 p-2 text-white"
            stats={mergedStats ?? []}
            statDifference={statDifference}
          />

          <AvgPrice name={name} />
        </>
      </Column>
    </>
  );
};

export default PreviewStats;
