import Column from "../../layout/Column";
import InfusionsItem from "../components/InfusionsItem";

import { ModalProps } from "@/app/_type/previewType";
import { groupByStatName } from "../utils/groupByStatName";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import BottomArrow from "../../common/BottomArrow";
import OneTable from "../table/OneTable";

const InfusionsModal = ({
  beforeName,
  options,
  selectedHandler,
  itemName,
  previewName,
  selectedValue,
}: ModalProps) => {
  const selected = selectedValue ? selectedValue : beforeName;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="flex h-full w-full items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <p>{selectedValue ? selectedValue : ""}</p>

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
              className="relative mx-2 mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[800px]"
            >
              <div className="bg-backgroundOne px-1 pb-4 pt-5 sm:p-6 sm:pb-4">
                <Column className="flex h-full justify-around">
                  <div className="h-full">
                    <div className="hidden w-full items-center justify-start md:flex md:justify-end">
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
                    <ul className="my-2 w-full">
                      {Object.keys(groupByStatName(options))
                        ?.sort((a, b) => a.localeCompare(b))
                        .map((statName) => (
                          <li key={statName} className="my-4">
                            <h3 className="text-base font-semibold text-white">
                              {statName}
                            </h3>
                            <ul className="grid w-full grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-4">
                              {groupByStatName(options)[statName]?.map(
                                (item, i) => (
                                  <li
                                    onClick={() => {
                                      selectedHandler(
                                        item?.stat_name,
                                        item?.stat_value,
                                      );
                                    }}
                                    className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
                                    key={item?.stat_name + i}
                                  >
                                    <InfusionsItem
                                      setOpenModal={setOpen}
                                      selectedValue={selected ?? ""}
                                      previewName={previewName}
                                      {...item}
                                    />
                                  </li>
                                ),
                              )}
                            </ul>
                          </li>
                        ))}
                    </ul>
                  </div>
                </Column>

                <div className="my-2 flex items-center justify-center">
                  <button
                    onClick={() => setOpen(false)}
                    className="m-auto flex h-10 w-16 items-center justify-center rounded-lg border border-borderColor text-center text-sm text-white hover:text-blue-300 sm:text-end"
                  >
                    확인
                  </button>
                </div>
              </div>
              <OneTable />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default InfusionsModal;
