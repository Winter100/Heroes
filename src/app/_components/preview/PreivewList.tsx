import PreviewItem from "./PreviewItem";
import { EnchantPriceType } from "@/app/_type/enchantPriceType";
import { usePreviewStore } from "@/app/_store/previewStore";

interface PreviewListProps {
  enchantList: EnchantPriceType[];
  enchantLoading: boolean;
}

const PreivewList = ({ enchantList, enchantLoading }: PreviewListProps) => {
  const items = usePreviewStore((state) => state.items);

  return (
    <ul className="grid grid-rows-17 p-2">
      {items?.map((item) => (
        <li className="h-12 sm:h-14" key={item?.item_equipment_slot_name}>
          <PreviewItem
            enchant={enchantList ?? []}
            enchantLoading={enchantLoading}
            item={item}
            slot={item?.item_equipment_slot_name}
          />
        </li>
      ))}
    </ul>
  );
};

export default PreivewList;
// "use client";

// import { usePreviewStore } from "@/app/_store/previewStore";
// import PreviewItem from "./PreviewItem";
// import { useEnchant } from "@/app/_hooks/useEnchant/useEnchant";
// import { useSearchParams } from "next/navigation";

// const PreivewList = () => {
//   const searchParams = useSearchParams();
//   const name = searchParams.get("name") ?? "";
//   const items = usePreviewStore((state) => state.items);
//   const { data: enchantList } = useEnchant(name);
//   return (
//     <ul className="grid grid-rows-17 p-2">
//       {items?.map((item) => (
//         <li className="h-12 sm:h-14" key={item?.item_equipment_slot_name}>
//           <PreviewItem
//             enchant={enchantList ?? []}
//             item={item}
//             slot={item?.item_equipment_slot_name}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default PreivewList;
