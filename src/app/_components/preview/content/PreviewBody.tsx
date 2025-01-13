"use client";

import { useCharacterData } from "@/app/_hooks/useCharacterData/useCharacterData";
import Loading from "../../common/Loading";
import PreivewList from "../PreivewList";
import AvgPrice from "../AvgPrice";
import OneTable from "../table/OneTable";
import PreviewTitle from "./PreviewTitle";
import Row from "../../layout/Row";

import ErrorDisplay from "../../common/error/ErrorDisplay";
import TourSummaryDialog from "../../dialog/TourSummaryDialog";
import StatsSummaryDialog from "../../dialog/StatsSummaryDialog";
import PartholnSummaryDialog from "../../dialog/PartholnSummaryDialog";
import GrindingSummaryDialog from "../../dialog/GrindingSummaryDialog";

const PreviewBody = () => {
  const { enchantList, isLoading, error, name, enchantLoading } =
    useCharacterData();

  if (isLoading) return <Loading size="10" />;
  if (error) return <ErrorDisplay content={`${name} 조회에 실패했습니다`} />;

  return (
    <>
      <Row className="flex h-7 items-center justify-center sm:justify-end">
        <div className="flex h-full w-72 gap-2 text-xs">
          <TourSummaryDialog />
          <StatsSummaryDialog />
          <PartholnSummaryDialog />
          <GrindingSummaryDialog />
        </div>
      </Row>
      <PreviewTitle />
      <PreivewList
        enchantList={enchantList ?? []}
        enchantLoading={enchantLoading}
      />
      <AvgPrice />
      <OneTable />
    </>
  );
};

export default PreviewBody;
// "use client";

// import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";

// import { useSearchParams } from "next/navigation";
// import { useOcid } from "@/app/_hooks/useOcid/useOcid";
// import Loading from "../../common/Loading";
// import PreivewList from "../PreivewList";
// import AvgPrice from "../AvgPrice";
// import Column from "../../layout/Column";
// import OneTable from "../table/OneTable";

// const PreviewBody = () => {
//   const searchParams = useSearchParams();
//   const name = searchParams.get("name") ?? "";
//   const {
//     data: ocid,
//     error: OcidError,
//     isLoading: ocidLoading,
//   } = useOcid(name);
//   const { error, isLoading } = useEquipment(ocid ?? "");

//   if (ocidLoading || isLoading) {
//     return (
//       <div className="flex h-full w-full items-center justify-center rounded-lg p-2">
//         <Loading width="10" height="10" />
//       </div>
//     );
//   }

//   if (OcidError) {
//     return (
//       <div className="flex h-96 w-full cursor-default flex-col items-center justify-center gap-2 rounded-lg p-2 text-sm text-white">
//         <p>{name} 조회에 실패했습니다</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex h-96 w-full flex-col items-center justify-center gap-2 rounded-lg p-2 text-sm text-red-100">
//         <p>오류가 발생했습니다</p>
//         <p>잠시 후 다시 시도해 주세요</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <PreivewList />
//       <AvgPrice />
//       <Column className="flex items-center justify-center text-white">
//         <OneTable />
//       </Column>
//     </>
//   );
// };

// export default PreviewBody;
