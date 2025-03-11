import { NewTuning_stat } from "@/app/_type/equipmentType";
import { getImageByName } from "@/app/_utils/getImageByName";

export const getMaterials = (items: (NewTuning_stat[] | null)[]) => {
  const t = items?.map((stat) => {
    return stat?.map((s) => {
      return {
        stat_name: s.stat_name,
        one_ingredient: s.one_ingredient,
        grindingNumber: Math.ceil(
          (Number(s.stat_value) - Number(s.stat_min_value)) /
            Number(s.stat_one_value),
        ),
      };
    });
  });

  const materialTotals: Record<string, number> = {};

  t.map((stat) =>
    stat?.forEach((stat) => {
      const grindingNumber = stat.grindingNumber;
      stat.one_ingredient.forEach((ingredient) => {
        const { name, quantity } = ingredient;
        const value = Number(quantity) * grindingNumber;

        if (!materialTotals[name]) {
          materialTotals[name] = 0;
        }
        materialTotals[name] += value;
      });
    }),
  );

  const materialsArray = Object.keys(materialTotals)
    .map((name) => ({
      name,
      value: materialTotals[name],
      src: getImageByName(name),
      // src: `/images/items/ingredient/${name}.png`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

  return materialsArray;
};
