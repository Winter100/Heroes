import { InfusionType } from '@/app/_type/infusionType';

type Grouped = {
  [key: string]: InfusionType[];
};
export const groupInfuison = (data: InfusionType[]) => {
  const grouped: Grouped = {};

  data.forEach((item) => {
    const statName = item.stat_value[0].stat_name;

    if (!grouped[statName]) {
      grouped[statName] = [];
    }

    grouped[statName].push(item);
  });

  return Object.keys(grouped).map((stat) => ({
    name: stat,
    items: grouped[stat],
  }));
};
