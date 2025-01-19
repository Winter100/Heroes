"use client";
import { useState } from "react";
import Image from "next/image";

import Modal from "../../common/modal/Modal";
import { Button } from "@headlessui/react";
import { useRaidStore } from "@/app/_store/raidStore";
import BottomArrow from "../../common/BottomArrow";
import LimitRaidSelecter from "../table/LimitRaidSelecter";
import RaidSelecter from "../table/RaidSelecter";

const RaidSelecterModal = ({ isAllBtn = true }: { isAllBtn: boolean }) => {
  const [open, setOpen] = useState(false);
  const raidString = useRaidStore((state) => state.raidString);

  const title = raidString.monsterName;
  const ButtonTitle = title ? title : "레이드를 선택해주세요";

  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Open className="h-full w-full">
        <Button
          className="flex h-full w-full items-center justify-center text-xs hover:text-white"
          onClick={() => setOpen((pre) => !pre)}
        >
          <div className="flex w-full flex-col items-center justify-center">
            {isAllBtn && (
              <p className="text-[10px] text-gray-400">{raidString.entry}</p>
            )}

            <div className="flex flex-row">
              <div className="flex w-6 items-center justify-center">
                <Image
                  src={raidString.image}
                  width={16}
                  height={13}
                  alt={raidString.monsterName}
                  style={{ width: "16px", height: "13px" }}
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center">
                  {ButtonTitle} <BottomArrow />
                </div>
              </div>
            </div>
          </div>
        </Button>
      </Modal.Open>
      <Modal.Body>
        <>
          <div className="block sm:hidden">
            <button onClick={() => setOpen(false)}>X</button>
          </div>
          {isAllBtn ? (
            <RaidSelecter setOpen={setOpen} />
          ) : (
            <LimitRaidSelecter setOpen={setOpen} />
          )}
        </>
      </Modal.Body>
    </Modal>
  );
};

export default RaidSelecterModal;
