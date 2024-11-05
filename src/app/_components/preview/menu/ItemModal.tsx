import { NewEquipmentType } from "@/app/_type/equipmentType";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import BottomArrow from "../../common/BottomArrow";
import GrindingList from "../../common/GrindingList";
import IngredientList from "../../common/IngredientList";
import OneTable from "../table/OneTable";

const ItemModal = ({ item }: { item: NewEquipmentType }) => {
  const [open, setOpen] = useState(false);

  const itemName = {
    name: item?.item_name ?? "",
    level: item?.item_option?.enhancement_level ?? "",
  };

  return (
    <>
      <Button onClick={() => setOpen((pre) => !pre)}>
        <div className="flex items-center justify-center text-[10px] md:text-xs">
          {itemName.level} {itemName.name} <BottomArrow />
        </div>
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="mx-2 flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            <DialogPanel
              transition
              className="relative mx-2 mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[700px]"
            >
              <div className="w-full bg-backgroundOne px-2 pb-4 pt-5 md:pb-4">
                <div className="flex w-full items-center justify-start lg:justify-end">
                  <button onClick={() => setOpen(false)}>X</button>
                </div>

                <div className="flex flex-col gap-7">
                  <div className="text-center text-sm">
                    <div className="flex flex-col">
                      <p>
                        {itemName.level} {itemName.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-background p-2">
                    {/* <div className="flex flex-col items-center justify-center rounded-lg bg-background p-2"> */}
                    <GrindingList item={item} />
                  </div>

                  {/* <div className="flex items-center justify-center text-xs">
                    * 해제는 13단계 이상 강화된 장비에 해제를 제외한 연마가
                    완료되어야 가능합니다
                  </div> */}

                  <div className="flex min-h-56 items-center justify-center p-2">
                    <IngredientList item={item} />
                  </div>
                </div>
                <div className="flex items-center justify-center text-sm sm:hidden">
                  <button onClick={() => setOpen(false)}>확인</button>
                </div>
              </div>
              <div className="pb-2">
                <OneTable />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ItemModal;
