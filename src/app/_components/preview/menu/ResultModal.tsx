"use client";
import { useState } from "react";
import Button from "../../common/Button";
import PreviewStats from "../PreviewStats";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const ResultModal = ({ name }: { name: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="w-12 text-[9px] sm:text-xs"
        onClick={() => setOpen((pre) => !pre)}
      >
        능력치
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            <DialogPanel
              transition
              className="relative mx-auto mb-6 transform overflow-hidden rounded-lg border border-borderColor bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
                {name ? (
                  <PreviewStats name={name} />
                ) : (
                  <p className="text-sm">이름을 입력하고 이용해주세요.</p>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ResultModal;
