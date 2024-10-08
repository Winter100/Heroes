"use client";

import { useState } from "react";

import BottomArrow from "../../common/BottomArrow";
import EnchantModal from "./EnchantModal";
import InfusionsModal from "./InfusionsModal";
import { usePreviewStore } from "@/app/_store/previewStore";
import { PreviewModalProps } from "@/app/_type/previewType";

// const overlay = {
//   backgroundColor: "rgba(0,0,0,0.85)",
// };

// const content = {
//   width: "1050px",
//   height: "900px",
//   margin: "auto",
//   zIndex: 100,
//   border: "1px solid gray",
//   backgroundColor: "rgb(20,21,23)",
// };

const overlay = {
  backgroundColor: "rgba(0,0,0,0.85)",
};

const content = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const PreviewModal = ({
  beforeName,
  itemName,
  slot,
  previewName,
  options = [],
  before,
  enchantList,
}: PreviewModalProps) => {
  const setAfterStats = usePreviewStore((state) => state.setAfterStats);
  const beforeStats = usePreviewStore((state) => state.setBeforeStats);

  const afterStats = usePreviewStore((state) => state.afterStats);

  const selectedName = afterStats.find(
    (item) => item.slot === slot && item.previewName === previewName,
  )?.stat_name;

  const selectedHandler = (
    title: string,
    value: { stat_name: string; stat_value: string }[],
  ) => {
    const afterValue = {
      slot,
      previewName,
      stat_name: title,
      stat_value: value,
    };

    const beforeValue = {
      slot,
      previewName,
      stat_name: before?.stat_name,
      stat_value: before?.stat_value,
    };

    beforeStats(beforeValue);
    setAfterStats(afterValue);
  };

  return (
    <div className="h-full w-full">
      {previewName === "infusions" ? (
        <InfusionsModal
          beforeName={beforeName}
          selectedValue={selectedName}
          previewName={previewName}
          itemName={itemName}
          selectedHandler={selectedHandler}
          options={options}
          overlay={overlay}
          content={content}
        />
      ) : (
        <EnchantModal
          beforeName={beforeName}
          slot={slot}
          selectedValue={selectedName}
          previewName={previewName}
          itemName={itemName}
          enchantList={enchantList}
          selectedHandler={selectedHandler}
          options={options}
          overlay={overlay}
          content={content}
        />
      )}
    </div>
  );
};

export default PreviewModal;
