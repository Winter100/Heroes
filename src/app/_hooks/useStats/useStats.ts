import { useQuery } from "@tanstack/react-query";
import { useOcid } from "../useOcid/useOcid";
import { getStats } from "@/app/_services/getStats";
import { mergeAtk } from "../useCharacter/utils/mergeAtk";
import { mergeStats } from "@/app/_utils/mergeStats";

export const useStats = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { mergeAtkAndMatk, translatedStats } = mergeStats();
  const { data, isLoading, error } = useQuery({
    enabled: !!ocid,
    queryKey: [ocid, "스텟"],
    queryFn: () => getStats(ocid ?? ""),
    select: (data) => {
      const mergeAtk = mergeAtkAndMatk(data);
      return translatedStats(mergeAtk);
    },
  });

  return { data, isLoading, error };
};
