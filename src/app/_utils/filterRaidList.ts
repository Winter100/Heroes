import { raidList } from "../_constant/raidList";

export const filterRaidList = (entry: string) => {
  const result =
    entry === "빠른전투"
      ? raidList
          ?.map((item) => {
            const filteredMonsters = item.monsters
              .filter((monster) => monster.entry?.length > 1)
              .map((monster) => {
                const { limit, entry, ...rest } = monster;
                return { ...rest, entry };
              });

            return filteredMonsters.length > 0
              ? {
                  raid_name: item.raid_name,
                  monsters: filteredMonsters,
                }
              : null;
          })
          .filter(Boolean)
      : raidList?.map((item) => {
          return {
            raid_name: item.raid_name,
            monsters: item.monsters.map((monster) => {
              const { limit, entry, ...rest } = monster;
              return { ...rest, limit };
            }),
          };
        });
  return result;
};
// import { raidList } from "../_constant/raidList";

// export const filterRaidList = (entry: string) => {
//   const result =
//     entry === "빠른전투"
//       ? raidList?.map((item) => {
//           return {
//             raid_name: item.raid_name,
//             monsters: item.monsters
//               .filter((monster) => monster.entry?.length > 1)
//               .map((monster) => {
//                 const { limit, entry, ...rest } = monster;
//                 return { ...rest, entry };
//               }),
//           };
//         })
//       : raidList?.map((item) => {
//           return {
//             raid_name: item.raid_name,
//             monsters: item.monsters.map((monster) => {
//               const { limit, entry, ...rest } = monster;
//               return { ...rest, limit };
//             }),
//           };
//         });

//   console.log(result);
//   return result;
// };
