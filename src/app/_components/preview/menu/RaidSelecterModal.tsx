"use client";
import { useState } from "react";
import Modal from "../../common/Modal/Modal";
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
          className="flex h-full w-full items-center justify-center text-xs"
          onClick={() => setOpen((pre) => !pre)}
        >
          {ButtonTitle} <BottomArrow />
        </Button>
      </Modal.Open>
      <Modal.Body>
        {isAllBtn ? (
          <RaidSelecter setOpen={setOpen} />
        ) : (
          <LimitRaidSelecter setOpen={setOpen} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default RaidSelecterModal;
