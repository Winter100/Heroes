import { useQuery } from "@tanstack/react-query";
import { useOcid } from "./useOcid/useOcid";
import { getBasic } from "../_services/getBasic";
import { Basic } from "../_type/characterType";

export const useBasic = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { data, isLoading } = useQuery<Basic>({
    enabled: !!ocid,
    queryKey: [ocid, "베이직"],
    queryFn: () => getBasic(ocid ?? ""),
  });

  return { data, isLoading };
};
