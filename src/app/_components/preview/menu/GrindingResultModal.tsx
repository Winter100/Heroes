"use client";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Button from "../../common/Button";
import { usePreviewStore } from "@/app/_store/previewStore";
import GrindingResult from "./GrindingResult";
import OneTable from "../table/OneTable";

const GrindingResultModal = () => {
  const [open, setOpen] = useState(false);

  const items = usePreviewStore((state) => state.items);

  const grindingItems = items.filter((item) => item.item_option.tuning_stat);

  const ingredientItems = grindingItems.map(
    (item) => item.item_option.tuning_stat,
  );

  const t = ingredientItems?.map((stat) => {
    return stat?.map((s) => {
      return {
        stat_name: s.stat_name,
        one_ingredient: s.one_ingredient,
        grindingNumber: Math.ceil(
          (Number(s.stat_value) - Number(s.stat_min_value)) /
            Number(s.stat_one_value),
        ),
      };
    });
  });

  const materialTotals: Record<string, number> = {};

  t.map((stat) =>
    stat?.forEach((stat) => {
      const grindingNumber = stat.grindingNumber;
      stat.one_ingredient.forEach((ingredient) => {
        const { stat_name, stat_value } = ingredient;
        const value = Number(stat_value) * grindingNumber;

        if (!materialTotals[stat_name]) {
          materialTotals[stat_name] = 0;
        }
        materialTotals[stat_name] += value;
      });
    }),
  );

  const materialsArray = Object.keys(materialTotals)
    .map((name) => ({
      name,
      value: materialTotals[name],
      src: `/images/items/ingredient/${name}.png`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

  return (
    <>
      <Button className="flex-1 text-xs" onClick={() => setOpen((pre) => !pre)}>
        연마
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="mx-2 flex min-h-full items-end justify-center text-center sm:p-0 md:items-center">
            {grindingItems.length >= 1 ? (
              <DialogPanel
                transition
                className="relative mb-6 transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:mx-6 sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:w-[1500px]"
              >
                <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
                  <div className="flex w-full items-center justify-start lg:justify-end">
                    <button onClick={() => setOpen(false)}>X</button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <GrindingResult
                      grindingItems={grindingItems}
                      materialsArray={materialsArray}
                    />
                  </div>

                  <div className="flex items-center justify-center text-sm sm:hidden">
                    <button onClick={() => setOpen(false)}>확인</button>
                  </div>
                </div>
                {grindingItems.length >= 1 && (
                  <div className="pb-2">
                    <OneTable />
                  </div>
                )}
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

                  <div className="flex items-center justify-center text-sm">
                    연마 가능한 장비가 없습니다.
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

export default GrindingResultModal;
