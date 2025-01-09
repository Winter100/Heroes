"use client";

import { useStats } from "@/app/_hooks/useStats/useStats";
import PreviewStats from "../../../PreviewStats";
import { useSearchParams } from "next/navigation";

const StatsContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const { data, mergedStats, statDifference } = useStats();

  return (
    <PreviewStats
      name={name}
      data={data ?? []}
      mergedStats={mergedStats ?? []}
      statDifference={statDifference ?? []}
    />
  );
};

export default StatsContent;
