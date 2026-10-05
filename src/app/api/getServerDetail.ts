import { notFound } from 'next/navigation';
import { getServerApi } from './getServerApi';
import { ApiError } from './requestApi';

export const getServerDetail = async <T>(
  path: string,
  options?: RequestInit
): Promise<T> => {
  try {
    return await getServerApi<T>(path, options);
  } catch (e: unknown) {
    if (e instanceof ApiError && e.status === 404) {
      notFound();
    }

    throw e;
  }
};
