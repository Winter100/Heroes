import PreviewItem from "./PreviewItem";
import { usePreviewStore } from "@/app/_store/previewStore";

const PreivewList = () => {
  const items = usePreviewStore((state) => state.items);

  return (
    <ul className="grid grid-rows-17 p-2">
      {items?.map((item) => (
        <li className="h-12 sm:h-14" key={item?.item_equipment_slot_name}>
          <PreviewItem item={item} slot={item?.item_equipment_slot_name} />
        </li>
      ))}
    </ul>
  );
};

export default PreivewList;
