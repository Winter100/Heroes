import { API_PATH } from '@/app/_constant/keyword';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '@/app/_type/homeType';
import { getClientApi } from '@/app/api/getClientApi';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useNotice = () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': `application/json`,
    },
  };

  return useSuspenseQuery({
    queryFn: () =>
      getClientApi<{
        notice: NoticeDataType;
        patchNotice: NoticePatchDataType;
        eventNotice: NoticeEventDataType;
      }>(`${API_PATH.notice}`, options),
    queryKey: [API_PATH.notice],
    retry: 1,
  });
};
