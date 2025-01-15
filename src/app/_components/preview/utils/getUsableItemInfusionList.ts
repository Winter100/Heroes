export const getUsableItemInfusionList = (
  infusionList: {
    equipment: string[];
    value: {
      rank: string;
      stat_name: string;
      stat_value: {
        stat_name: string;
        stat_value: string;
      }[];
      description: string;
    }[];
  }[],
  slot: string,
) => {
  return (
    infusionList.find((item) => item.equipment.includes(slot))?.value ?? []
  );
};
