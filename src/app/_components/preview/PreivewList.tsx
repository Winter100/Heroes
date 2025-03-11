import PreviewItem from "./PreviewItem";
import { usePreviewStore } from "@/app/_store/previewStore";

const PreivewList = () => {
  const items = usePreviewStore((state) => state.info);

  return (
    <ul className="grid grid-rows-17 gap-y-3 pt-1 sm:gap-y-5">
      {items?.map((item) => (
        <li key={item.item_equipment_slot_name}>
          <PreviewItem item={item} slot={item?.item_equipment_slot_name} />
        </li>
      ))}
    </ul>
  );
};

export default PreivewList;
