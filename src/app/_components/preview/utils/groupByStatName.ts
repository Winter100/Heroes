import { OptionsType } from "@/app/_type/previewType";

export const groupByStatName = (
  data: OptionsType,
): Record<string, OptionsType> => {
  return data.reduce((acc: Record<string, OptionsType>, curr) => {
    const baseName = curr.stat_value[0].stat_name;

    if (!acc[baseName]) {
      acc[baseName] = [];
    }
    acc[baseName].push(curr);
    return acc;
  }, {});
};
