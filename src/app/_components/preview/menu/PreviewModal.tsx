"use client";

import InfusionsModal from "./InfusionsModal";
import { usePreviewStore } from "@/app/_store/previewStore";
import { PreviewModalProps } from "@/app/_type/previewType";
import EnchantDialog from "../../dialog/EnchantDialog";

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
  enchantLoading,
}: PreviewModalProps) => {
  const setAfterStats = usePreviewStore((state) => state.setAfterStats);
  const setBeforeStats = usePreviewStore((state) => state.setBeforeStats);

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
    const name = beforeName?.split(" ")[0];
    const statValue = beforeName?.split(" ")[1];
    const beforeStats = [
      { stat_name: name ?? "", stat_value: statValue ?? "" },
    ];

    const beforeValue = {
      slot,
      previewName,
      stat_name: before?.stat_name,
      stat_value: before.stat_name ? before?.stat_value : beforeStats,
    };

    setBeforeStats(beforeValue);
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
        <>
          <EnchantDialog
            label={
              selectedName !== undefined ? selectedName : (beforeName ?? "")
            }
            selectedValue={selectedName ?? ""}
            slot={slot}
            upgreadeType={previewName}
            items={itemName}
            enchantPriceList={enchantList ?? []}
            selectedHandler={selectedHandler}
            enchantList={options}
            isLoading={enchantLoading ?? false}
          />
        </>
      )}
    </div>
  );
};

export default PreviewModal;
