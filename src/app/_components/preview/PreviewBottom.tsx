import React from "react";
import AvgPrice from "./AvgPrice";
import Column from "../layout/Column";
import OneTable from "./table/OneTable";

const PreviewBottom = () => {
  return (
    <>
      <AvgPrice />
      <Column className="flex items-center justify-center text-white">
        <OneTable />
      </Column>
    </>
  );
};

export default PreviewBottom;
