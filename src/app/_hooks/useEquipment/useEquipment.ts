import { getEquipment } from "@/app/_services/getEquipment";
import { Item_equipment } from "@/app/_type/equipmentType";
import { useQuery } from "@tanstack/react-query";
import { useOcid } from "../useOcid/useOcid";

export const useEquipment = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { data, isLoading } = useQuery<Item_equipment>({
    enabled: !!ocid,
    queryKey: [ocid, "장비"],
    queryFn: () => getEquipment(ocid ?? ""),
  });

  const items = data?.item_equipment;

  const bag = items?.filter((i) => i.item_equipment_page === "Bag") ?? [];
  const cash = items?.filter((i) => i.item_equipment_page === "Cash") ?? [];

  return { bag, cash, isLoading };
};
