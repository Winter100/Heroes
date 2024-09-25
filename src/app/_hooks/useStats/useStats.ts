import { useQuery } from "@tanstack/react-query";
import { useOcid } from "../useOcid/useOcid";
import { getStats } from "@/app/_services/getStats";

export const useStats = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { data, isLoading } = useQuery({
    enabled: !!ocid,
    queryKey: [ocid, "스텟"],
    queryFn: () => getStats(ocid ?? ""),
  });

  return { data, isLoading };
};
