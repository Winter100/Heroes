import { Item_equipment } from './../_type/equipmentType';
import { useQuery } from '@tanstack/react-query';
import { getEquipment } from '../_services/getEquipment';
import { GrindType } from '../api/getGrindOption';
import { bagList, getNewTuning } from '../_utils/preview';

/**
 * 리액트쿼리를 이용, 유저의 OCID로 장착 장비 및 캐쉬 장비를 조회합니다.
 *
 * 장비에는 연마 스탯이 추가됩니다.
 *
 * @param ocid
 * @returns 유저의 장착 장비 및 캐쉬 장비 (연마 포함)
 */

export const useUserEquipment = (ocid: string, grind: GrindType[]) => {
  return useQuery<Item_equipment, Error>({
    enabled: !!ocid && !!grind,
    queryKey: [ocid, 'equipment'],
    queryFn: () => getEquipment(ocid ?? ''),
    select: (data) => {
      const rawItems = data?.item_equipment;

      const bagItems =
        rawItems?.filter((i) => i.item_equipment_page === 'Bag') ?? [];
      const cashItems =
        rawItems?.filter((i) => i.item_equipment_page === 'Cash') ?? [];

      const processedBag = bagList(bagItems).map((item) => {
        const newTuning = getNewTuning(item, grind ?? []);
        return {
          ...item,
          item_option: { ...item.item_option, tuning_stat: newTuning ?? [] },
        };
      });

      return {
        item_equipment: [...processedBag, ...cashItems],
      };
    },
  });
};
