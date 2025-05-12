import { NewEquipmentType } from '@/app/_type/equipmentType';
import { getImageByName } from '@/app/_utils/getImageByName';

export const getNeedMaterials = (
  item: NewEquipmentType,
  ability: {
    name: string;
    slot: string;
    ingredient: { name: string; quantity: string }[];
  }[]
) => {
  const tuningStats = item?.item_option?.tuning_stat?.map((stat) => stat);
  const slot = item.item_equipment_slot_name;
  const findAbility = ability.find((ab) => ab.slot === slot);

  const abilityType = {
    stat_max_value: '1',
    stat_min_value: '1',
    stat_name: findAbility?.name ?? '',
    stat_one_value: '1',
    stat_value: '2',
    one_ingredient: findAbility?.ingredient ?? [],
  };

  const mergedItems = tuningStats?.concat(abilityType) || [abilityType];

  const t = mergedItems?.map((stat) => {
    return {
      stat_name: stat.stat_name,
      one_ingredient: stat.one_ingredient,
      grindingNumber: Math.ceil(
        (Number(stat.stat_value) - Number(stat.stat_min_value)) /
          Number(stat.stat_one_value)
      ),
    };
  });

  const materialTotals: Record<string, number> = {};

  t?.forEach((stat) => {
    const grindingNumber = stat.grindingNumber;
    stat.one_ingredient.forEach((ingredient) => {
      const { name, quantity } = ingredient;
      const value = Number(quantity) * grindingNumber;

      if (!materialTotals[name]) {
        materialTotals[name] = 0;
      }
      materialTotals[name] += value;
    });
  });

  const materialsArray = Object.keys(materialTotals)
    .map((name) => ({
      name,
      value: materialTotals[name],
      src: getImageByName(name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  return materialsArray;
};
