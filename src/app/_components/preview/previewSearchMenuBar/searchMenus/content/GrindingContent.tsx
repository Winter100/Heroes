"use client";
import { usePreviewStore } from "@/app/_store/previewStore";
import GrindingResult from "../../../menu/GrindingResult";
import { useAbilityStore } from "@/app/_store/abilityStore";
import { getMaterials } from "../../../utils/getMaterials";

const GrindingContent = () => {
  const items = usePreviewStore((state) => state.items);
  const grindingItems = items.filter((item) => item.item_option.tuning_stat);

  const ingredientItems = grindingItems.map(
    (item) => item.item_option.tuning_stat,
  );

  const ability = useAbilityStore((state) => state.ability);

  const ab = ability.map((ab) => {
    return {
      stat_max_value: "1",
      stat_min_value: "1",
      stat_name: ab?.name ?? "",
      stat_one_value: "1",
      stat_value: "2",
      one_ingredient: ab?.ingredient ?? [],
    };
  });

  const mergedItems = ingredientItems?.concat([ab]) || [ab];

  const materialsArray = getMaterials(mergedItems);

  return (
    <GrindingResult
      grindingItems={grindingItems}
      materialsArray={materialsArray}
    />
  );
};

export default GrindingContent;
