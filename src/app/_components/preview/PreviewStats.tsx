"use client";

import { useStats } from "@/app/_hooks/useStats/useStats";
import Loading from "../common/Loading";

import Column from "../layout/Column";
import Row from "../layout/Row";

import PreviewStatsBox from "./components/PreviewStatsBox";
import { IoMdArrowForward } from "react-icons/io";

const PreviewStats = ({ name }: { name: string }) => {
  const { data, isLoading, mergedStats, statDifference } = useStats(name);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading width="10" height="10" />
      </div>
    );
  }

  return (
    <Column className="h-full w-full gap-1 text-xs">
      <Row className="min-h-6 items-center justify-center text-sm font-semibold">
        {name}
      </Row>
      <Row className="items-center justify-center gap-2">
        <Column className="gap-1">
          <p className="text-center">기존</p>
          <PreviewStatsBox
            className="sm:w-42 h-96 rounded-lg border border-gray-600 bg-zinc-800 p-2 text-white"
            stats={data ?? []}
          />
        </Column>
        <div className="flex items-center justify-center text-2xl">
          <IoMdArrowForward />
        </div>

        <Column className="gap-1">
          <p className="text-center">변경</p>
          <PreviewStatsBox
            isTitle={true}
            className="sm:w-42 h-96 rounded-lg border border-gray-600 bg-zinc-800 p-2 text-white"
            stats={mergedStats ?? []}
            statDifference={statDifference}
          />
        </Column>
      </Row>
    </Column>
  );
};

export default PreviewStats;
