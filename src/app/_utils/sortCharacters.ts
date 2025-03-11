import { MergedCharacter } from "../_type/characterType";

export const sortCharacters = (
  title: string,
  ascending: boolean,
  characterInfo: MergedCharacter[],
) => {
  const characters = [...characterInfo];

  const sortedData = characters.sort((a, b) => {
    const statA = a.info.find((stat) =>
      stat.stat_name.replace(/\s/g, "").includes(title),
    );
    const statB = b.info.find((stat) =>
      stat.stat_name.replace(/\s/g, "").includes(title),
    );
    const valueA = statA ? statA.stat_value : "0";
    const valueB = statB ? statB.stat_value : "0";

    const numA = parseFloat(valueA?.toString());
    const numB = parseFloat(valueB?.toString());

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      const statA = a.name;
      const statB = b.name;
      if (statA < statB) return ascending ? -1 : 1;
      if (statA > statB) return ascending ? 1 : -1;
      return 0;
    }
    return ascending ? numA - numB : numB - numA;
  });

  return sortedData;
};
