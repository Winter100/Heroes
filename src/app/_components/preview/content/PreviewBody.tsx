"use client";

import { useCharacterData } from "@/app/_hooks/useCharacterData/useCharacterData";
import { useEnchantPriceList } from "@/app/_hooks/useEnchantPriceList/useEnchantPriceList";
import Loading from "../../common/Loading";
import PreivewList from "../PreivewList";
import PreviewTitle from "./PreviewTitle";
import Row from "../../layout/Row";

import ErrorDisplay from "../../common/error/ErrorDisplay";
import TourSummaryDialog from "../../dialog/TourSummaryDialog";
import StatsSummaryDialog from "../../dialog/StatsSummaryDialog";
import PartholnSummaryDialog from "../../dialog/PartholnSummaryDialog";
import GrindingSummaryDialog from "../../dialog/GrindingSummaryDialog";
import EnchantTotalPrice from "../../enchant/EnchantTotalPrice";
import RaidSelectorWithStats from "../table/RaidSelectorWithStats";
import Column from "../../layout/Column";

const PreviewBody = () => {
  const { isLoading, error, name } = useCharacterData();
  useEnchantPriceList();
  if (isLoading) return <Loading size="10" />;
  if (error)
    return <ErrorDisplay content={`${name || ""} 조회에 실패했습니다`} />;

  return (
    <>
      <Row className="absolute end-0 w-full max-w-80 items-center justify-center gap-2 text-xs">
        <TourSummaryDialog />
        <StatsSummaryDialog />
        <PartholnSummaryDialog />
        <GrindingSummaryDialog />
      </Row>

      <Column className="mt-6">
        <PreviewTitle />
        <PreivewList />
        <Row className="flex items-center justify-end text-white">
          <EnchantTotalPrice />
        </Row>
        <RaidSelectorWithStats />
      </Column>
    </>
  );
};

export default PreviewBody;
