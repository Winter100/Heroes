import { getEquipment } from '@/app/_services/getEquipment';
import { Item_equipment } from '@/app/_type/equipmentType';
import { useQuery } from '@tanstack/react-query';

export const useEquipment = (ocid: string) => {
  return useQuery<Item_equipment>({
    enabled: !!ocid,
    queryKey: [ocid, '장비'],
    queryFn: () => getEquipment(ocid ?? ''),
  });
};
