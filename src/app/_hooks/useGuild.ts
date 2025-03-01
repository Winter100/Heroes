import { useQuery } from "@tanstack/react-query";
import { useOcid } from "./useOcid/useOcid";
import { Guild } from "../_type/characterType";
import { getGuild } from "../_services/getGuild";

export const useGuild = (name: string) => {
  const { data: ocid } = useOcid(name);

  const { data, isLoading } = useQuery<Guild>({
    enabled: !!ocid,
    queryKey: [ocid, "길드"],
    queryFn: () => getGuild(ocid ?? ""),
    refetchOnWindowFocus: false,
  });

  const guild = data as Guild;

  return { guild, isLoading };
};
