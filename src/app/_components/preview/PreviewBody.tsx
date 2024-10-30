"use client";

import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import Loading from "../common/Loading";
import AvgPrice from "./AvgPrice";
import Column from "../layout/Column";
import OneTable from "./table/OneTable";
import PreivewList from "./PreivewList";

const PreviewBody = ({ name }: { name: string }) => {
  const { isLoading } = useEquipment(name);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg p-2">
        <Loading width="10" height="10" />
      </div>
    );
  }

  return (
    <>
      <PreivewList name={name} />
      <AvgPrice name={name} />
      <Column className="flex items-center justify-center text-white">
        <OneTable />
      </Column>
    </>
  );
};

export default PreviewBody;
