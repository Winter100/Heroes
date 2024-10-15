"use client";

import RaidSelecterModal from "../menu/RaidSelecterModal";

import { previewInitialTitleList } from "@/app/_constant/rankTitleList";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useRaidStore } from "@/app/_store/raidStore";
import { limitCalculator } from "../../home/characterInfoPanel/utils/limitCalculator";
import { MonstersType } from "@/app/_constant/raidList";
import { filterRaidList } from "@/app/_utils/filterRaidList";

const OneTable = () => {
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
  const raidString = useRaidStore((state) => state.raidString);

  const limitValue = filteredStats.find(
    (i) => i.stat_name === "해제",
  )?.stat_value;

  const boss = filterRaidList(raidString.entry)
    .find((raid) => {
      return raid?.monsters.some(
        (monster) => monster.name === raidString.monsterName,
      );
    })
    ?.monsters.find(
      (monster) => monster.name === raidString.monsterName,
    ) as MonstersType;

  return (
    <div className="relative w-full border-t border-borderColor pt-1 text-white">
      <RaidSelecterModal isAllBtn={true} />

      <table className="flex h-full w-full table-fixed flex-col gap-1 py-2 text-[9px] md:text-xs">
        <caption className="hidden">미리보기</caption>
        <thead>
          <tr className="flex w-full items-center justify-center">
            {previewInitialTitleList.map((item) => (
              <th
                className="flex flex-1 items-center justify-center text-[10px] md:text-xs"
                key={item.stat_name}
              >
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-light">
                  {item.stat_name}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="flex h-full items-center justify-center text-xs font-normal">
          <tr className="flex h-full w-full items-center justify-center">
            {filteredStats.map((item) => (
              <td
                className="flex w-full flex-1 flex-col items-center justify-center text-[9px] md:text-xs"
                key={item.stat_name + item.stat_value}
              >
                <p className="flex items-center justify-center">
                  {item.stat_value}
                </p>
                {boss && (
                  <p
                    className={`flex items-center justify-center text-[8px] md:text-xs ${
                      limitCalculator(
                        boss,
                        raidString.entry,
                        item.stat_name,
                        item.stat_value,
                        limitValue,
                      ) !== null
                        ? limitCalculator(
                            boss,
                            raidString.entry,
                            item.stat_name,
                            item.stat_value,
                            limitValue,
                          )! > 0
                          ? "text-green-300"
                          : limitCalculator(
                                boss,
                                raidString.entry,
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
                      raidString.entry,
                      item.stat_name,
                      item.stat_value,
                      limitValue,
                    )
                      ? limitCalculator(
                          boss,
                          raidString.entry,
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
    </div>
  );
};

export default OneTable;
