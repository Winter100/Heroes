import { requestApi } from './requestApi';

export const getServerApi = async <T>(
  path: string,
  options?: RequestInit
): Promise<T> => {
  const baseUrl = process.env.BACKEND_URL;

  if (!baseUrl) {
    throw new Error('BACKEND_URL이 설정되지 않았습니다.');
  }

  return requestApi<T>(`${baseUrl}${path}`, options);
};
