import React from "react";
import EnchantContent from "./content/EnchantContent";
import { EnchantPrice } from "@/app/_type/enchantPriceType";
import BasicDialog from "@/app/_components/common/BasicDialog";
import Row from "../layout/Row";
import BottomArrow from "../common/BottomArrow";

interface EnchantDialogProps {
  label: string;
  slot: string;
  upgreadeType: string;
  items: {
    name: string;
    level: string;
  };
  enchantPriceList: EnchantPrice[];
  selectedHandler: (
    enchantName: string,
    enchantEffects: {
      stat_name: string;
      stat_value: string;
    }[],
  ) => void;
  enchantList: {
    rank: string;
    stat_name: string; // 스텟네임. 스텟밸류 이름 바꾸기 인챈트 관련으로.
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  isLoading: boolean;
  selectedValue: string;
}

const EnchantDialog = ({
  items,
  enchantList,
  selectedHandler,
  enchantPriceList,
  label,
  slot,
  upgreadeType,
  isLoading,
  selectedValue,
}: EnchantDialogProps) => {
  const { level, name } = items;
  // 확인 버튼 넣기?
  return (
    <BasicDialog
      label={
        <Row className="items-center justify-center">
          {selectedValue}
          <BottomArrow />
        </Row>
      }
      size="1200px"
    >
      <div>
        <div className="flex h-6 items-center justify-center text-sm font-semibold text-white">
          <h2>{`${level} ${name}`}</h2>
        </div>
        <EnchantContent
          enchantList={enchantList}
          selectedHandler={selectedHandler}
          upgreadeType={upgreadeType}
          enchantPriceList={enchantPriceList}
          slot={slot}
          isLoading={isLoading}
          selectedValue={label}
        />
      </div>
    </BasicDialog>
  );
};

export default EnchantDialog;
