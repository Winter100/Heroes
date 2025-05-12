import { InfusionType } from '@/app/_type/infusionType';

export const getSerachInfusion = (
  infusionData: {
    name: string;
    items: InfusionType[];
  }[],
  serachQuery: string
) => {
  const trimSearch = serachQuery.trim();
  if (!trimSearch) return infusionData;

  return infusionData.filter((infusion) => infusion.name.includes(trimSearch));
};
