import { usePreviewStore } from "@/app/_store/previewStore";
import { useEnchant } from "../useEnchant/useEnchant";
import { useEquipment } from "../useEquipment/useEquipment";
import { useOcid } from "../useOcid/useOcid";
import { useSearchParams } from "next/navigation";
import { useStats } from "../useStats/useStats";

export const useCharacterData = () => {
  // 프리뷰와 관련된 모든 데이터 여기서 불러오기?
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";

  const {
    data: ocid,
    error: ocidError,
    isLoading: ocidLoading,
  } = useOcid(name);
  const { error: equipmentError, isLoading: equipmentLoading } = useEquipment(
    ocid ?? "",
  );
  const { data: enchantList } = useEnchant(name);
  // const items = usePreviewStore((state) => state.items);

  return {
    isLoading: ocidLoading || equipmentLoading,
    error: ocidError || equipmentError,
    enchantList,
    // items,
    ocid,
    name,
  };
};
