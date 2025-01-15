"use client";

import { usePreviewStore } from "@/app/_store/previewStore";
import { PreviewModalProps } from "@/app/_type/previewType";
import EnchantDialog from "../../dialog/EnchantDialog";
import InfusionsDialog from "../../dialog/InfusionsDialog";
import { splitStringAndNumber } from "../utils/splitStringAndNumber";

const PreviewModal = ({
  itemName,
  slot,
  upgreadeType,
  usableItemList = [],
  existing,
}: PreviewModalProps) => {
  // 커스텀 훅으로 분리 하기?
  const setAfterStats = usePreviewStore((state) => state.setAfterStats);
  const setBeforeStats = usePreviewStore((state) => state.setBeforeStats);
  const afterStats = usePreviewStore((state) => state.afterStats);

  const isExistingStats = existing?.stat_value?.length >= 1;

  const { name, level } = splitStringAndNumber(existing.stat_name);

  const selectedName = afterStats.find(
    (item) => item.slot === slot && item.upgreadeType === upgreadeType,
  )?.stat_name;

  const selectedHandler = (
    title: string,
    value: { stat_name: string; stat_value: string }[],
  ) => {
    const beforeValue = {
      slot,
      upgreadeType,
      stat_name: name,
      stat_value: isExistingStats
        ? [...existing.stat_value].flat()
        : [{ stat_name: name ?? "", stat_value: level.toString() }],
    };

    const afterValue = {
      slot,
      upgreadeType,
      stat_name: title,
      stat_value: value,
    };

    setBeforeStats(beforeValue);
    setAfterStats(afterValue);
  };

  return (
    <div className="h-full w-full">
      {upgreadeType === "infusions" ? (
        <InfusionsDialog
          infusionList={usableItemList}
          items={itemName}
          label={selectedName ?? ""}
          selectedValue={
            selectedName !== undefined
              ? selectedName
              : (existing.stat_name ?? "")
          }
          selectedHandler={selectedHandler}
        />
      ) : (
        <EnchantDialog
          items={itemName}
          label={selectedName ?? ""}
          selectedValue={
            selectedName !== undefined
              ? selectedName
              : (existing.stat_name ?? "")
          }
          slot={slot}
          upgreadeType={upgreadeType}
          selectedHandler={selectedHandler}
          enchantList={usableItemList}
        />
      )}
    </div>
  );
};

export default PreviewModal;
