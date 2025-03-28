"use client";
import { useState } from "react";
import Image from "next/image";

import Column from "../../layout/Column";
import Button from "../../common/Button";
import { useRaidStore } from "@/app/_store/raidStore";
import { filterRaidList } from "@/app/_utils/filterRaidList";
import { getImageByName } from "@/app/_utils/getImageByName";

const LimitRaidSelecter = ({ setOpen }: { setOpen: (is: boolean) => void }) => {
  const [entry, setEntry] = useState<"빠른전투" | "상한">("상한");
  const raidString = useRaidStore((state) => state.raidString);

  const selectedBoss = useRaidStore((state) => state.setSelectBoss);

  const onClick = (
    raid_name: string,
    monster_name: string,
    entry: "빠른전투" | "상한" = "상한",
  ) => {
    selectedBoss(raid_name, monster_name, entry);
    setOpen(false);
  };

  const boss = filterRaidList(entry);

  return (
    <Column className="h-full w-full gap-4">
      <>
        <div className="flex h-8 items-center justify-center gap-4 text-xs">
          <div
            className={` ${
              entry === "상한"
                ? "rounded-lg border-borderColor text-blue-300"
                : ""
            } h-full`}
          >
            <Button
              className="!w-20 cursor-default !rounded-md !border-borderColor p-2 !text-blue-300"
              onClick={() => setEntry("상한")}
            >
              상한
            </Button>
          </div>
        </div>
      </>

      <div className="flex w-full flex-col gap-2 text-white sm:grid sm:grid-cols-4">
        {boss.map((item) => (
          <div
            className="flex flex-col gap-2 rounded-lg bg-background p-2"
            key={item?.raid_name}
          >
            <div className="flex w-full items-center justify-center">
              <h2>{item?.raid_name}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {item?.monsters.map((raid) => (
                <button
                  onClick={() => onClick(item?.raid_name, raid.name, entry)}
                  key={raid?.name}
                  className={`flex w-full items-center justify-center gap-2 hover:text-blue-300 ${raidString.monsterName === raid.name && raidString.raidName === item.raid_name && raidString.entry === entry ? "text-blue-300" : ""} `}
                >
                  <Image
                    src={getImageByName(raid?.name)}
                    // src={raid?.image ?? ""}
                    width={40}
                    height={24}
                    alt={raid?.name}
                    style={{ width: "40px", height: "24px" }}
                  />

                  <div className="flex h-full flex-1 items-center text-xs">
                    {raid.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
};

export default LimitRaidSelecter;
