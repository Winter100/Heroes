import { useQuery } from "@tanstack/react-query";
import { useOcid } from "./useOcid/useOcid";
import { getBasic } from "../_services/getBasic";
import { Basic } from "../_type/characterType";
import { mergeAtk } from "./useCharacter/utils/mergeAtk";
import { mergeStats } from "../_utils/mergeStats";

export const useBasic = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { data, isLoading } = useQuery<Basic>({
    enabled: !!ocid,
    queryKey: [ocid, "베이직"],
    queryFn: () => getBasic(ocid ?? ""),
  });

  const basic = data as Basic;

  return { basic, isLoading };
};
