import { Dispatch, SetStateAction, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

import CashTable from "./CashTable";
import { EquipmentType } from "@/app/_type/equipmentType";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import BottomArrow from "@/app/_components/common/BottomArrow";

const ItemDetailInfo = ({
  item,
  setItem,
}: {
  item: EquipmentType;
  setItem: Dispatch<SetStateAction<EquipmentType | null>>;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full flex-col gap-1 p-1 sm:w-full">
      <div className="flex w-full items-center">
        <button
          className="text-2xl text-gray-400 hover:text-blue-300"
          onClick={() => setItem(null)}
        >
          <IoMdArrowBack />
        </button>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-400 bg-red-300">
        {item?.item_equipment_page === "Bag" ? (
          <>
            <Button
              className="flex h-full w-full items-center justify-center"
              onClick={() => setOpen((pre) => !pre)}
            >
              {item?.item_option?.enhancement_level ?? ""} {item.item_name}
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
                  ></DialogPanel>
                </div>
              </div>
            </Dialog>
          </>
        ) : (
          <CashTable item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailInfo;
