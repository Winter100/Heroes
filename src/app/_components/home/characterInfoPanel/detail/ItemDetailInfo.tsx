import { Dispatch, SetStateAction } from "react";
import { IoMdArrowBack } from "react-icons/io";

import { EquipmentType } from "@/app/_type/equipmentType";
import BagTable from "./BagTable";
import CashTable from "./CashTable";

const ItemDetailInfo = ({
  item,
  setItem,
}: {
  item: EquipmentType;
  setItem: Dispatch<SetStateAction<EquipmentType | null>>;
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-1 p-2">
      <div className="flex w-full items-center">
        <button
          className="text-2xl text-gray-400 hover:text-blue-300"
          onClick={() => setItem(null)}
        >
          <IoMdArrowBack />
        </button>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-400">
        {item?.item_equipment_page === "Bag" ? (
          <BagTable item={item} />
        ) : (
          <CashTable item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailInfo;
