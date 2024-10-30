import { NewEquipmentType } from "@/app/_type/equipmentType";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import BottomArrow from "../../common/BottomArrow";
import GrindingList from "../../common/GrindingList";
import IngredientList from "../../common/IngredientList";
import Column from "../../layout/Column";
import OneTable from "../table/OneTable";

const ItemModal = ({ item }: { item: NewEquipmentType }) => {
  const [open, setOpen] = useState(false);

  const itemName = {
    name: item?.item_name ?? "",
    level: item?.item_option?.enhancement_level ?? "",
  };

  return (
    <>
      <Button className="text-xs" onClick={() => setOpen((pre) => !pre)}>
        <div className="flex items-center justify-center">
          {itemName.level} {itemName.name} <BottomArrow />
        </div>
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
              className="relative mx-2 mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne px-2 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[1000px]"
            >
              <div className="w-full bg-backgroundOne pb-4 pt-5 md:p-2 md:pb-4">
                <div className="flex w-full items-center justify-start lg:justify-end">
                  <button onClick={() => setOpen(false)}>X</button>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    <div>
                      {itemName.level} {itemName.name}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <GrindingList item={item} />
                  </div>
                  <div className="flex items-center justify-center">
                    <IngredientList item={item} />
                  </div>
                </div>
              </div>
              <Column className="flex items-center justify-center text-white">
                <OneTable />
              </Column>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ItemModal;
