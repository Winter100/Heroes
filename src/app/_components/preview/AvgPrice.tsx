"use client";

import { usePreviewStore } from "@/app/_store/previewStore";
import Row from "../layout/Row";

const AvgPrice = ({ name }: { name: string }) => {
  const totalPriceItem = usePreviewStore((state) => state.totalPriceItem);

  const sumAvg = totalPriceItem?.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <>
      <Row
        className={`${sumAvg !== 0 ? "border-t" : ""} flex min-h-6 w-full items-center justify-end border-borderColor pt-2`}
      >
        <Row className="flex w-36 items-center justify-center text-[11px] text-white">
          {sumAvg !== 0 &&
            name &&
            `${"예상 가격: "} ${sumAvg?.toLocaleString()}`}
        </Row>
      </Row>
    </>
  );
};

export default AvgPrice;
