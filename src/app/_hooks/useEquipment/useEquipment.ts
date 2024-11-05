import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getEquipment } from "@/app/_services/getEquipment";
import { Item_equipment } from "@/app/_type/equipmentType";
import { bagList } from "@/app/_components/preview/utils/bagList";
import { getNewTuning } from "@/app/_components/preview/utils/getNewTuning";
import { usePreviewStore } from "@/app/_store/previewStore";

export const useEquipment = (ocid: string) => {
  const { data, isLoading, error } = useQuery<Item_equipment>({
    enabled: !!ocid,
    queryKey: [ocid, "장비"],
    queryFn: () => getEquipment(ocid ?? ""),
    gcTime: 1000 * 5,
    staleTime: 1000 * 5,
    refetchOnWindowFocus: false,
  });

  const items = data?.item_equipment;

  const b = items?.filter((i) => i.item_equipment_page === "Bag") ?? [];
  const cash = items?.filter((i) => i.item_equipment_page === "Cash") ?? [];

  const bag = bagList(b).map((item) => {
    const newTuning = getNewTuning(item);
    return {
      ...item,
      item_option: { ...item.item_option, tuning_stat: newTuning ?? null },
    };
  });

  const setItems = usePreviewStore((state) => state.setItems);

  useEffect(() => {
    if (bag) {
      setItems(bag ?? []);
    }
  }, [bag, setItems]);

  return { bag, cash, isLoading, data, error };
};
