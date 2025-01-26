import { prefix_enchant_options } from "@/app/_constant/enchant";

export const filterUniqueStatObjects = (
  data: typeof prefix_enchant_options,
): typeof data => {
  const seenStatNames = new Set<string>();
  const uniqueObjects: typeof data = [];

  data.forEach((item) => {
    if (!seenStatNames.has(item.name)) {
      uniqueObjects.push(item);
      seenStatNames.add(item.name);
    }

    item.stat_value.forEach((stat) => {
      seenStatNames.add(stat.stat_name);
    });
  });

  return uniqueObjects;
};
