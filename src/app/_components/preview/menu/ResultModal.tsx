"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "../../common/Button";
import PreviewStats from "../PreviewStats";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useStats } from "@/app/_hooks/useStats/useStats";

const ResultModal = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const { data, isLoading, mergedStats, statDifference } = useStats();

  const [open, setOpen] = useState(false);

  if (isLoading) {
    return null;
  }
  return (
    <>
      <Button className="w-12 text-xs" onClick={() => setOpen((pre) => !pre)}>
        스텟
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
                <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
                  <div className="flex w-full items-center justify-start lg:justify-end">
                    <button onClick={() => setOpen(false)}>X</button>
                  </div>
                  <PreviewStats
                    name={name}
                    data={data}
                    mergedStats={mergedStats ?? []}
                    statDifference={statDifference ?? []}
                  />
                </div>
              </DialogPanel>
            ) : (
              <DialogPanel
                transition
                className="relative mx-auto mb-6 transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
                  <div className="flex items-center justify-start lg:justify-end">
                    <button onClick={() => setOpen(false)}>X</button>
                  </div>
                  <div className="text-sm">캐릭터 이름을 확인해주세요</div>
                </div>
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ResultModal;
