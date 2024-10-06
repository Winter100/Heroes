import { getOcid } from "@/app/_services/getOcid";
import { useQuery } from "@tanstack/react-query";

export const useOcid = (name: string) => {
  const { data, isLoading } = useQuery({
    enabled: !!name,
    queryKey: [name],
    queryFn: () => getOcid(name),
  });

  return { data, isLoading };
};
