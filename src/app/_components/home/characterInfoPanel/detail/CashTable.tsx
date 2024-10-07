import { useState } from "react";
import { EquipmentType } from "@/app/_type/equipmentType";
import Column from "@/app/_components/layout/Column";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const CashTable = ({ item }: { item: EquipmentType }) => {
  const cash_item_color_1 = item.item_option.cash_item_color.color_1;
  const cash_item_color_2 = item.item_option.cash_item_color.color_3;
  const cash_item_color_3 = item.item_option.cash_item_color.color_1;
  const item_name = item.item_name;
  const [open, setOpen] = useState(false);

  return (
    <Column className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg p-2 text-white hover:text-blue-300">
      <>
        <Button
          className="flex h-full w-full items-center justify-center"
          onClick={() => setOpen((pre) => !pre)}
        >
          {item_name}
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
                <div className="flex flex-col items-center justify-center gap-4 px-1 pb-4 pt-5 text-sm sm:p-6 sm:pb-4">
                  <div>{item_name}</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <p
                        className="h-5 w-5"
                        style={{
                          backgroundColor: `rgb(${cash_item_color_2})`,
                          borderRadius: "50%",
                        }}
                      ></p>
                      <p> {cash_item_color_1 ?? ""}</p>
                    </div>
                    <div className="flex gap-2">
                      <p
                        className="h-5 w-5"
                        style={{
                          backgroundColor: `rgb(${cash_item_color_2})`,
                          borderRadius: "50%",
                        }}
                      ></p>
                      <p> {cash_item_color_2 ?? ""}</p>
                    </div>
                    <div className="flex gap-2">
                      <p
                        className="h-5 w-5"
                        style={{
                          backgroundColor: `rgb(${cash_item_color_3})`,
                          borderRadius: "50%",
                        }}
                      ></p>
                      <p> {cash_item_color_3 ?? ""}</p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    </Column>
  );
};

export default CashTable;
