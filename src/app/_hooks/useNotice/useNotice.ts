import { getNotice } from "@/app/_services/getNotice";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export type NoticeType = "notice" | "notice-patch" | "notice-event";

export const useNotice = <T>(type: NoticeType): UseQueryResult<T> => {
  return useQuery({
    queryKey: [type],
    queryFn: () => getNotice(type),
  });
};
