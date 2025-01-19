import { MergedCharacter } from "@/app/_type/characterType";

export const filterCharacters = (
  characters: MergedCharacter[],
  selectedTitleList: { stat_name: string; isView: boolean }[],
) => {
  const filterdData = characters
    .map((c) => {
      const filterdInfo = c?.info
        ?.filter((infoItem) => {
          return selectedTitleList?.some(
            (selectedItem) =>
              selectedItem.stat_name.includes(infoItem.stat_name) &&
              selectedItem.isView === true,
          );
        })
        .sort((a, b) => {
          const indexA = selectedTitleList.findIndex(
            (selectedItem) => selectedItem.stat_name === a.stat_name,
          );
          const indexB = selectedTitleList.findIndex(
            (selectedItem) => selectedItem.stat_name === b.stat_name,
          );
          return indexA - indexB;
        });

      return [
        {
          name: filterdInfo.find((c) => c.stat_name === "이름")?.stat_value,
          info: filterdInfo,
        },
      ];
    })
    .flat();
  return filterdData;
};
