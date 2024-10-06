"use client";

import { usePreviewStore } from "@/app/_store/previewStore";
import Row from "../layout/Row";

const AvgPrice = ({ name }: { name: string }) => {
  const totalPriceItem = usePreviewStore((state) => state.totalPriceItem);

  const sumAvg = totalPriceItem?.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <>
      <Row className="min-h-6 items-stretch justify-center rounded-lg bg-zinc-800 p-1 text-[10px] text-white">
        {sumAvg !== 0 && name && `${"예상 가격: "} ${sumAvg?.toLocaleString()}`}
      </Row>
    </>
  );
};

export default AvgPrice;
