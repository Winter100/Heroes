import React from "react";
import EnchantContent from "./content/EnchantContent";
import BasicDialog from "@/app/_components/common/BasicDialog";
import BottomArrow from "../common/BottomArrow";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import ItemTitle from "../common/ItemTitle";
import { EnchantDialogProps } from "@/app/_type/enchantType";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import { useFilteredEnchantPriceList } from "./hooks/useFilteredEnchantPriceList";
import Button from "../common/Button";

const EnchantDialog = ({
  items,
  enchantList,
  selectedHandler,
  label,
  slot,
  upgreadeType,
  selectedValue,
}: EnchantDialogProps) => {
  const { level, name } = items;

  const { isOpen, onClose, onOpen } = useDialog();
  const { enchantPriceList, enchantPriceLoading } =
    useFilteredEnchantPriceList(upgreadeType);

  // 확인 버튼 넣기?
  return (
    <>
      <Button className="text-white" onClick={onOpen}>
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
          level={level}
          name={name}
        />
        <EnchantContent
          enchantList={enchantList}
          selectedHandler={selectedHandler}
          upgreadeType={upgreadeType}
          slot={slot}
          enchantPriceList={enchantPriceList || []}
          enchantPriceLoading={enchantPriceLoading}
          selectedValue={selectedValue}
        />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default EnchantDialog;
