import { useEquipment } from "../useEquipment/useEquipment";
import { useOcid } from "../useOcid/useOcid";
import { useSearchParams } from "next/navigation";

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

  return {
    isLoading: ocidLoading || equipmentLoading,
    error: ocidError || equipmentError,
    ocid,
    name,
  };
};
