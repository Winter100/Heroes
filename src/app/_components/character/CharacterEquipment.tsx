"use client";

import EquipmentGrid from "../card/EquipmentGrid";
import { bagList, cachList } from "../preview/utils/bagList";
import { getNewTuning } from "../preview/utils/getNewTuning";
import { Item_equipment } from "@/app/_type/equipmentType";
import { useQuery } from "@tanstack/react-query";
import { getEquipment } from "@/app/_services/getEquipment";
import Loading from "../common/Loading";
import CachGrid from "../card/CachGrid";
import { useEquipmentFilterStore } from "@/app/_store/equipmentFilterStore";
import ErrorDisplay from "../common/error/ErrorDisplay";

const CharacterEquipment = ({ ocid }: { ocid: string }) => {
  const { data, isLoading, error } = useQuery<Item_equipment>({
    enabled: !!ocid,
    queryKey: [ocid, "장비"],
    queryFn: () => getEquipment(ocid ?? ""),
  });
  const filterValue = useEquipmentFilterStore((state) => state.filter);

  const filterCach =
    data?.item_equipment?.filter((i) => i.item_equipment_page === "Cash") ?? [];

  const filterBag =
    data?.item_equipment?.filter((i) => i.item_equipment_page === "Bag") ?? [];

  const bag = bagList(filterBag).map((item) => {
    const newTuning = getNewTuning(item);
    return {
      ...item,
      item_option: { ...item.item_option, tuning_stat: newTuning ?? null },
    };
  });

  const cach = cachList(filterCach);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay content="잠시 후 다시 시도해주세요" />;
  }

  if (filterValue === "장비") {
    return <EquipmentGrid items={bag} />;
  } else {
    return <CachGrid items={cach} filterValue={filterValue} />;
  }
};

export default CharacterEquipment;
