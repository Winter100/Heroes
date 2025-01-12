"use client";
import EnchantItem from "../components/EnchantItem";
import { ModalProps } from "@/app/_type/previewType";
import Column from "../../layout/Column";
import BottomArrow from "../../common/BottomArrow";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import OneTable from "../table/OneTable";

const EnchantModal = ({
  beforeName,
  options,
  selectedHandler,
  slot,
  itemName,
  enchantList,
  previewName,
  selectedValue,
}: ModalProps) => {
  const selected = selectedValue !== undefined ? selectedValue : beforeName;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="flex h-full w-full items-center justify-center"
        onClick={() => setOpen(true)}
      >
        {selectedValue ? selectedValue : ""}
        <BottomArrow />
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            <DialogPanel
              transition
              className="relative mx-2 mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[1200px]"
              // className="relative mx-auto w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="h-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <Column className="flex h-full">
                  <div className="mb-2 h-full">
                    <div className="w-full items-center justify-start md:flex md:justify-end">
                      <button
                        onClick={() => setOpen(false)}
                        className="text-sm text-white hover:text-blue-300 sm:text-end"
                      >
                        X
                      </button>
                    </div>
                    <div className="flex h-6 items-center justify-center text-sm font-semibold text-white">
                      <h2>{`${itemName.level} ${itemName.name}`}</h2>
                    </div>

                    <ul className="my-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {options?.map((item, i) => (
                        <li
                          onClick={() =>
                            selectedHandler(item?.stat_name, item?.stat_value)
                          }
                          className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
                          key={item?.stat_name + i}
                        >
                          <EnchantItem
                            setOpenModal={setOpen}
                            slot={slot ?? ""}
                            selectedValue={selected}
                            previewName={previewName}
                            enchantList={enchantList ?? []}
                            {...item}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Column>
              </div>

              <div className="my-2 flex items-center justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="m-auto flex h-10 w-16 items-center justify-center rounded-lg border border-borderColor text-center text-sm text-white hover:text-blue-300 sm:text-end"
                >
                  확인
                </button>
              </div>
              <OneTable />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EnchantModal;
