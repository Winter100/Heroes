import { NewEquipmentType } from "@/app/_type/equipmentType";
import IngredientItem from "./IngredientItem";

interface IngredientListProps {
  item: NewEquipmentType;
}

const IngredientList = ({ item }: IngredientListProps) => {
  const tuningStats = item?.item_option?.tuning_stat?.map((stat) => stat);

  const t = tuningStats?.map((stat) => {
    return {
      stat_name: stat.stat_name,
      one_ingredient: stat.one_ingredient,
      grindingNumber: Math.ceil(
        (Number(stat.stat_value) - Number(stat.stat_min_value)) /
          Number(stat.stat_one_value),
      ),
    };
  });

  const materialTotals: Record<string, number> = {};

  t?.forEach((stat) => {
    const grindingNumber = stat.grindingNumber;
    stat.one_ingredient.forEach((ingredient) => {
      const { stat_name, stat_value } = ingredient;
      const value = Number(stat_value) * grindingNumber;

      if (!materialTotals[stat_name]) {
        materialTotals[stat_name] = 0;
      }
      materialTotals[stat_name] += value;
    });
  });

  const materialsArray = Object.keys(materialTotals)
    .map((name) => ({
      name,
      value: materialTotals[name],
      src: `/images/items/ingredient/${name}.png`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

  // const materia = materialsArray.filter((item) => item.value);

  return (
    <div className="grid w-full grid-cols-4 items-start justify-items-center gap-4">
      {materialsArray.map((item) => (
        <IngredientItem key={item.name} {...item} />
      ))}
    </div>
  );
};

export default IngredientList;
