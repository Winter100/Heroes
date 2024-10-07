"use client";
import { previewInitialTitleList } from "@/app/_constant/rankTitleList";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useRaidStore } from "@/app/_store/raidStore";
import { limitCalculator } from "../../home/characterInfoPanel/utils/limitCalculator";

const Table = () => {
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

  const selectedBoss = useRaidStore((state) => state.selectedBoss);
  const limitValue = filteredStats.find(
    (i) => i.stat_name === "해제",
  )?.stat_value;

  return (
    <table className="flex h-full w-full table-fixed flex-col gap-1 py-2 text-[9px] md:text-xs">
      <caption className="hidden">미리보기</caption>
      <thead className="flex items-center justify-center">
        <tr className="flex w-full items-center justify-center">
          {previewInitialTitleList.map((item) => (
            <th
              className="flex flex-1 items-center justify-center text-[9px] md:text-xs"
              key={item.stat_name}
            >
              {item.stat_name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex h-full items-center justify-center text-xs">
        <tr className="flex h-full w-full items-center justify-center">
          {filteredStats.map((item) => (
            <td
              className="flex w-full flex-1 flex-col items-center justify-center"
              key={item.stat_name}
            >
              <p className="flex items-center justify-center">
                {item.stat_value}
              </p>
              {selectedBoss && (
                <p
                  className={`flex items-center justify-center text-[10px] ${
                    limitCalculator(
                      selectedBoss,
                      item.stat_name,
                      item.stat_value,
                      limitValue,
                    ) !== null
                      ? limitCalculator(
                          selectedBoss,
                          item.stat_name,
                          item.stat_value,
                          limitValue,
                        )! > 0
                        ? "text-green-300"
                        : limitCalculator(
                              selectedBoss,
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
                    selectedBoss,
                    item.stat_name,
                    item.stat_value,
                    limitValue,
                  ) ?? ""}
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
