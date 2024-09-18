import { getEquipment } from "@/app/_services/getEquipment";
import { useCharacterStore } from "@/app/_store/characterStore";
import { Item_equipment } from "@/app/_type/equipmentType";
import { findOcidByName } from "@/app/_utils/localStorage";
import { useQuery } from "@tanstack/react-query";

export const useEquipment = () => {
  const name =
    useCharacterStore((state) => state.selectedCharacter?.name) ?? "";
  const ocid = findOcidByName(name) ?? "";
  const { data, isLoading } = useQuery<Item_equipment>({
    enabled: name ? true : false,
    queryKey: [name],
    queryFn: () => getEquipment(ocid),
  });

  const items = data?.item_equipment;

  const bag = items?.filter((i) => i.item_equipment_page === "Bag") ?? [];
  const cash = items?.filter((i) => i.item_equipment_page === "Cash") ?? [];

  return { bag, cash, isLoading };
};
