"use client";

import { usePreviewStore } from "@/app/_store/previewStore";
import Row from "../layout/Row";

const AvgPrice = () => {
  const totalPriceItem = usePreviewStore((state) => state.totalPriceItem);
  const sumAvg = totalPriceItem?.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <>
      <Row
        className={`${sumAvg !== 0 ? "border-t" : ""} flex min-h-6 w-full items-center justify-end border-borderColor py-2`}
      >
        <Row className="flex w-36 items-center justify-center text-[11px] text-white">
          {sumAvg !== 0 && `${"예상 가격: "} ${sumAvg?.toLocaleString()}`}
        </Row>
      </Row>
    </>
  );
};

export default AvgPrice;
// "use client";

// import { usePreviewStore } from "@/app/_store/previewStore";
// import Row from "../layout/Row";
// import { useStats } from "@/app/_hooks/useStats/useStats";
// import Loading from "../common/Loading";
// import { useSearchParams } from "next/navigation";

// const AvgPrice = () => {
//   const searchParams = useSearchParams();
//   const name = searchParams.get("name") ?? "";
//   const totalPriceItem = usePreviewStore((state) => state.totalPriceItem);
//   const { isLoading: StatsLoading } = useStats();
//   const sumAvg = totalPriceItem?.reduce((acc, cur) => acc + cur.price, 0);

//   if (StatsLoading) {
//     return (
//       <div className="flex h-full w-full items-center justify-center rounded-lg p-2">
//         <Loading width="10" height="10" />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Row
//         className={`${sumAvg !== 0 ? "border-t" : ""} flex min-h-6 w-full items-center justify-end border-borderColor py-2`}
//       >
//         <Row className="flex w-36 items-center justify-center text-[11px] text-white">
//           {sumAvg !== 0 &&
//             name &&
//             `${"예상 가격: "} ${sumAvg?.toLocaleString()}`}
//         </Row>
//       </Row>
//     </>
//   );
// };

// export default AvgPrice;
