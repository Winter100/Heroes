"use client";
import Column from "../layout/Column";
import Row from "../layout/Row";

import PreviewStatsBox from "./components/PreviewStatsBox";
import { IoMdArrowForward } from "react-icons/io";

import { Stat } from "@/app/_type/previewType";

const PreviewStats = ({
  name,
  data,
  mergedStats,
  statDifference,
}: {
  name: string;
  data: Stat[];
  mergedStats: Stat[];
  statDifference: Stat[];
}) => {
  return (
    <Column className="h-full w-full gap-1 text-xs">
      <Row className="min-h-6 items-center justify-center text-sm font-semibold">
        {name}
      </Row>
      <Row className="items-center justify-center gap-1 sm:gap-2">
        <Column className="gap-1">
          <p className="text-center">기존</p>
          <PreviewStatsBox
            className="max-w-42 h-96 rounded-lg border border-gray-600 bg-zinc-800 p-2 text-white"
            stats={data ?? []}
          />
        </Column>
        <div className="hidden items-center justify-center text-2xl sm:flex">
          <IoMdArrowForward />
        </div>

        <Column className="gap-1">
          <p className="text-center">변경</p>
          <PreviewStatsBox
            isTitle={true}
            className="max-w-42 h-96 rounded-lg border border-gray-600 bg-zinc-800 p-2 text-white"
            stats={mergedStats ?? []}
            statDifference={statDifference ?? []}
          />
        </Column>
      </Row>
    </Column>
  );
};

export default PreviewStats;
