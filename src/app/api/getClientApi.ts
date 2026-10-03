import { requestApi } from './requestApi';

type ClientRequestOptions = Omit<RequestInit, 'next'>;

export const getClientApi = async <T>(
  path: string,
  options?: ClientRequestOptions
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BACKEND_URL이 설정되지 않았습니다.');
  }

  return requestApi<T>(`${baseUrl}${path}`, options);
};
