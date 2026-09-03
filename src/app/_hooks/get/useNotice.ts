import { API_PATH } from '@/app/_constant/keyword';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '@/app/_type/homeType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useNotice = () => {
  return useQuery({
    queryFn: () =>
      axios.get<{
        notice: NoticeDataType;
        patchNotice: NoticePatchDataType;
        eventNotice: NoticeEventDataType;
      }>(`${process.env.NEXT_PUBLIC_BACKEND_URL!}${API_PATH.notice}`, {
        method: 'GET',
        headers: {
          'Content-Type': `application/json`,
        },
      }),
    queryKey: [API_PATH.notice],
    retry: 1,
    select: (data) => {
      return {
        notice: data.data.notice.notice ?? [],
        patchNotice: data.data.patchNotice.patch_notice,
        eventNotice: data.data.eventNotice.event_notice,
      };
    },
  });
};
