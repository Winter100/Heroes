"use client";

import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import Loading from "../common/Loading";
import AvgPrice from "./AvgPrice";
import Column from "../layout/Column";
import OneTable from "./table/OneTable";
import PreivewList from "./PreivewList";
import { useSearchParams } from "next/navigation";
import { useOcid } from "@/app/_hooks/useOcid/useOcid";

const PreviewBody = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const {
    data: ocid,
    error: OcidError,
    isLoading: ocidLoading,
  } = useOcid(name);
  const { error, isLoading } = useEquipment(ocid ?? "");

  if (ocidLoading || isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg p-2">
        <Loading width="10" height="10" />
      </div>
    );
  }

  if (OcidError) {
    return (
      <div className="flex h-96 w-full cursor-default flex-col items-center justify-center gap-2 rounded-lg p-2 text-sm text-white">
        <p>{name} 조회에 실패했습니다</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-96 w-full flex-col items-center justify-center gap-2 rounded-lg p-2 text-sm text-red-100">
        <p>오류가 발생했습니다</p>
        <p>잠시 후 다시 시도해 주세요</p>
      </div>
    );
  }

  return (
    <>
      <PreivewList />
      <AvgPrice />
      <Column className="flex items-center justify-center text-white">
        <OneTable />
      </Column>
    </>
  );
};

export default PreviewBody;
