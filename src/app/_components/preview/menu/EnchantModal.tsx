"use client";
import Modal from "react-modal";
import EnchantItem from "../components/EnchantItem";
import { ModalProps } from "@/app/_type/previewType";
import Row from "../../layout/Row";
import Table from "../table/Table";
import Column from "../../layout/Column";
import BottomArrow from "../../common/BottomArrow";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

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
        onClick={() => setOpen((pre) => !pre)}
      >
        {selectedValue ? selectedValue : ""}
        <BottomArrow />
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center">
            <DialogPanel
              transition
              className="relative mx-auto w-full transform overflow-hidden rounded-lg border bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-backgroundOne px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
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

                    <ul className="my-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
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
                  <Row className="h-20 rounded-lg border bg-zinc-800 text-white">
                    <Table />
                  </Row>
                </Column>
              </div>

              <div className="my-2 flex items-center justify-center md:hidden">
                <button
                  onClick={() => setOpen(false)}
                  className="m-auto flex h-10 w-20 items-center justify-center rounded-lg border border-borderColor text-center text-sm text-white hover:text-blue-300 sm:text-end"
                >
                  확인
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EnchantModal;
