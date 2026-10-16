import { API_PATH } from '@/app/_constant/keyword';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '@/app/_type/homeType';
import { getClientApi } from '@/app/api/getClientApi';
import { useQuery } from '@tanstack/react-query';

export const useNotice = () => {
  const options: RequestInit = {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': `application/json`,
    },
  };

  return useQuery({
    queryFn: () =>
      getClientApi<{
        notice: NoticeDataType;
        patchNotice: NoticePatchDataType;
        eventNotice: NoticeEventDataType;
      }>(`${API_PATH.notice}`, options),
    queryKey: [API_PATH.notice],
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    throwOnError: true,
    retry: 1,
  });
};
