import React from "react";
import EnchantContent from "./content/EnchantContent";
import BasicDialog from "@/app/_components/common/BasicDialog";
import Row from "../layout/Row";
import BottomArrow from "../common/BottomArrow";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import ItemTitle from "../common/ItemTitle";
import { useEnchantPriceStore } from "@/app/_store/enchantPriceStore";
import { EnchantDialogProps } from "@/app/_type/enchantType";

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

  const prefixPriceList = useEnchantPriceStore((state) => state.prefix);
  const suffixPriceList = useEnchantPriceStore((state) => state.suffix);
  const enchantPriceList =
    upgreadeType === "prefix" ? prefixPriceList : suffixPriceList;
  const enchantPriceLoading = useEnchantPriceStore(
    (state) => state.enchantPriceLoading,
  );

  // 확인 버튼 넣기?
  return (
    <BasicDialog
      label={
        <Row className="items-center justify-center">
          {label}
          <BottomArrow />
        </Row>
      }
      size="1200px"
    >
      <ItemTitle level={level} name={name} />
      <EnchantContent
        enchantList={enchantList}
        selectedHandler={selectedHandler}
        upgreadeType={upgreadeType}
        slot={slot}
        enchantPriceList={enchantPriceList ?? []}
        enchantPriceLoading={enchantPriceLoading}
        selectedValue={selectedValue}
      />
      <RaidSelectorWithStats />
    </BasicDialog>
  );
};

export default EnchantDialog;
