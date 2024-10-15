"use client";

import { previewInitialTitleList } from "@/app/_constant/rankTitleList";
import { usePreviewStore } from "@/app/_store/previewStore";
import { limitCalculator } from "../../home/characterInfoPanel/utils/limitCalculator";
import { MonstersType } from "@/app/_constant/raidList";

interface TableProps {
  boss: MonstersType;
  bossEntry: "상한" | "빠른전투";
}
const Table = ({ boss, bossEntry }: TableProps) => {
  const previewAllStats = usePreviewStore((state) => state.previewAllStats);

  const filteredStats = previewAllStats
    .filter((stat) =>
      previewInitialTitleList.some((c) => c.stat_name === stat.stat_name),
    )
    .sort(
      (a, b) =>
        previewInitialTitleList.findIndex((c) => c.stat_name === a.stat_name) -
        previewInitialTitleList.findIndex((c) => c.stat_name === b.stat_name),
    );

  const limitValue = filteredStats.find(
    (i) => i.stat_name === "해제",
  )?.stat_value;

  return (
    <table className="flex h-full w-full table-fixed flex-col gap-1 py-2">
      <caption className="hidden">미리보기</caption>
      <thead className="flex items-center justify-center">
        <tr className="flex w-full items-center justify-center">
          {previewInitialTitleList?.map((item) => (
            <th
              className="flex flex-1 items-center justify-center text-[10px] font-normal"
              key={item?.stat_name}
            >
              {item.stat_name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex h-full items-center justify-center text-xs">
        <tr className="flex h-full w-full items-center justify-center">
          {filteredStats?.map((item) => (
            <td
              className="flex w-full flex-1 flex-col items-center justify-center"
              key={item?.stat_name + item?.stat_value}
            >
              <p className="flex items-center justify-center">
                {item.stat_value}
              </p>
              {boss && (
                <p
                  className={`flex h-4 items-center justify-center text-[10px] ${
                    limitCalculator(
                      boss,
                      bossEntry,
                      item.stat_name,
                      item.stat_value,
                      limitValue,
                    ) !== null
                      ? limitCalculator(
                          boss,
                          bossEntry,
                          item.stat_name,
                          item.stat_value,
                          limitValue,
                        )! > 0
                        ? "text-green-300"
                        : limitCalculator(
                              boss,
                              bossEntry,
                              item.stat_name,
                              item.stat_value,
                              limitValue,
                            )! < 0
                          ? "text-red-300"
                          : ""
                      : ""
                  }`}
                >
                  {limitCalculator(
                    boss,
                    bossEntry,
                    item.stat_name,
                    item.stat_value,
                    limitValue,
                  )
                    ? limitCalculator(
                        boss,
                        bossEntry,
                        item.stat_name,
                        item.stat_value,
                        limitValue,
                      )
                    : ""}
                </p>
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
