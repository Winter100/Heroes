import { useEquipment } from './useEquipment';
import { useOcid } from './useOcid';

export const useCharacterData = () => {
  // 프리뷰와 관련된 모든 데이터 여기서 불러오기?

  const {
    data: ocid,
    error: ocidError,
    isLoading: ocidLoading,
    name,
  } = useOcid();
  const { error: equipmentError, isLoading: equipmentLoading } = useEquipment(
    ocid ?? ''
  );

  return {
    name,
    isLoading: ocidLoading || equipmentLoading,
    error: ocidError || equipmentError,
    ocid,
  };
};
