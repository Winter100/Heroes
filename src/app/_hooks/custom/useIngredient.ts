'use client';
import { imageMap } from '../../_constant/imageList';
import { useGrindStore } from '../../_store/useGrindStore';
import { NewEquipmentType } from '../../_type/equipmentType';

export const useIngredient = (items: NewEquipmentType[]) => {
  const simulations = useGrindStore((state) => state.simulations);

  const allPossibleIngredientNames = Array.from(
    new Set(
      items.flatMap((item) =>
        item.item_option.tuning_stat?.flatMap((stat) =>
          stat.one_ingredient.map((ing) => ing.name)
        )
      )
    )
  ).filter(Boolean);

  const aggregatedIngredients = items.reduce(
    (acc, item) => {
      const currentItemSimulation = simulations[item.item_name];
      if (!currentItemSimulation) return acc;

      const { before, after } = currentItemSimulation.grind;

      Object.entries(after).forEach(([stat, value]) => {
        const currentItemIngredient = item.item_option.tuning_stat?.find(
          (s) => s.stat_name === stat
        );

        if (!currentItemIngredient) return;

        const oneValue = Number(currentItemIngredient.stat_one_value);
        const beforeValue =
          before[stat] ?? Number(currentItemIngredient.stat_min_value);

        if (typeof value !== 'number' || isNaN(oneValue)) return;

        const step = Math.max(0, Math.ceil((value - beforeValue) / oneValue));

        currentItemIngredient.one_ingredient.forEach((ingredient) => {
          const quantity = Number(ingredient.quantity) * step;
          acc[ingredient.name] = (acc[ingredient.name] || 0) + quantity;
        });
      });

      return acc;
    },
    {} as Record<string, number>
  );

  const materialList = allPossibleIngredientNames
    .map((name) => {
      const value = aggregatedIngredients[name] || 0;
      return {
        name,
        value: Math.round(value),
        src: imageMap.get(name) || '',
        isZeroValue: value === 0,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'ko'));

  if (materialList.length === 0) return null;

  return materialList;
};
