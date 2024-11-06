"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "../../common/Button";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { partholn } from "@/app/_constant/partholn";
import PartholnList from "./PartholnList";
import { usePartholnStore } from "@/app/_store/partholnStore";
import { usePreviewStore } from "@/app/_store/previewStore";
import OneTable from "../table/OneTable";
import { useStats } from "@/app/_hooks/useStats/useStats";

const Partholn = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const { data } = useStats();
  const [open, setOpen] = useState(false);
  const level = usePartholnStore((state) => state.level);
  const setLevel = usePartholnStore((state) => state.setLevel);
  const setBeforeStats = usePreviewStore((state) => state.setBeforeStats);

  return (
    <>
      <Button className="flex-1 text-xs" onClick={() => setOpen((pre) => !pre)}>
        파르홀른
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            {data ? (
              <DialogPanel
                transition
                className="relative mx-auto mb-6 transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-backgroundOne px-2 pb-4 pt-5 md:p-6 md:pb-4">
                  <div className="flex w-full items-center justify-start lg:justify-end">
                    <button onClick={() => setOpen(false)}>X</button>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 text-sm">
                    <p className="text-red-300">
                      * 시공간왜곡 및 결사대 컷을 계산할때 이용해주세요
                    </p>
                    <p>기존 스텟에서 원정단으로 증가한 수치만큼 빼게 됩니다</p>
                    <PartholnList
                      partholn={partholn}
                      level={level}
                      setLevel={setLevel}
                      setBeforeStats={setBeforeStats}
                    />
                  </div>
                </div>
                <OneTable />
              </DialogPanel>
            ) : (
              <DialogPanel
                transition
                className="relative mx-auto mb-6 transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
                  <div className="flex w-full items-center justify-start lg:justify-end">
                    <button onClick={() => setOpen(false)}>X</button>
                  </div>
                  <div className="flex flex-col items-center justify-center text-sm">
                    <p>{name}</p>
                    <p>캐릭터 이름을 확인해주세요</p>
                  </div>
                </div>
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Partholn;
