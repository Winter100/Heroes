import React, { memo } from "react";
import EnchantContent from "./content/EnchantContent";
import BasicDialog from "@/app/_components/common/BasicDialog";
import BottomArrow from "../common/BottomArrow";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import { useFilteredEnchantPriceList } from "./hooks/useFilteredEnchantPriceList";
import { Button } from "@headlessui/react";
import ItemTitle from "../common/ItemTitle";

interface EnchantChangeDialogProps {
  label: string;
  enchantList: {
    rank: string;
    name: string;
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  selectedHandler: (
    enchantName: string,
    enchantEffect: { stat_name: string; stat_value: string }[],
  ) => void;
  upgreadeType: string;
  slot: string;
  items: {
    name: string;
    level: string;
  };
  selectedValue: string;
}

const EnchantChangeDialog = memo(
  ({
    label,
    enchantList,
    selectedHandler,
    upgreadeType,
    slot,
    items,
    selectedValue,
  }: EnchantChangeDialogProps) => {
    const { isOpen, onClose, onOpen } = useDialog();

    const { enchantPriceList, enchantPriceLoading } =
      useFilteredEnchantPriceList(upgreadeType);

    return (
      <>
        <Button
          className="flex w-full flex-row items-center justify-center border border-borderColor/50 p-0.5 text-[11px] text-white hover:border-blue-300 sm:text-xs"
          onClick={onOpen}
        >
          {label}
          <BottomArrow />
        </Button>
        <BasicDialog
          className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-full md:p-6 md:pb-4"
          isOpen={isOpen}
          onClose={onClose}
          size="1200px"
        >
          <ItemTitle
            className="text-sm font-medium text-white"
            level={""}
            name={items.name}
          />
          <EnchantContent
            enchantList={enchantList}
            selectedHandler={selectedHandler}
            upgreadeType={upgreadeType}
            slot={slot}
            enchantPriceList={enchantPriceList || []}
            enchantPriceLoading={enchantPriceLoading || false}
            selectedValue={selectedValue || ""}
          />
          <RaidSelectorWithStats />
        </BasicDialog>
      </>
    );
  },
);

export default EnchantChangeDialog;

EnchantChangeDialog.displayName = "EnchantChangeDialog";

// import React from "react";
// import EnchantContent from "./content/EnchantContent";
// import BasicDialog from "@/app/_components/common/BasicDialog";
// import BottomArrow from "../common/BottomArrow";
// import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
// import ItemTitle from "../common/ItemTitle";
// import { EnchantDialogProps } from "@/app/_type/enchantType";
// import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// import { useFilteredEnchantPriceList } from "./hooks/useFilteredEnchantPriceList";
// import Button from "../common/Button";

// const EnchantDialog = ({
//   items,
//   enchantList,
//   selectedHandler,
//   label,
//   slot,
//   upgreadeType,
//   selectedValue,
// }: EnchantDialogProps) => {
//   const { level, name } = items;

//   const { isOpen, onClose, onOpen } = useDialog();
//   const { enchantPriceList, enchantPriceLoading } =
//     useFilteredEnchantPriceList(upgreadeType);

//   // 확인 버튼 넣기?
//   return (
//     <>
//       <Button className="text-white" onClick={onOpen}>
//         {label}
//         <BottomArrow />
//       </Button>
//       <BasicDialog
//         className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-full md:p-6 md:pb-4"
//         isOpen={isOpen}
//         onClose={onClose}
//         size="1200px"
//       >
//         <ItemTitle
//           className="text-sm font-medium text-white"
//           level={level}
//           name={name}
//         />
//         <EnchantContent
//           enchantList={enchantList}
//           selectedHandler={selectedHandler}
//           upgreadeType={upgreadeType}
//           slot={slot}
//           enchantPriceList={enchantPriceList || []}
//           enchantPriceLoading={enchantPriceLoading}
//           selectedValue={selectedValue}
//         />
//         <RaidSelectorWithStats />
//       </BasicDialog>
//     </>
//   );
// };

// export default EnchantDialog;
