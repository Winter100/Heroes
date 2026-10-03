export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly publicMessage?: string
  ) {
    super(publicMessage ?? '데이터를 불러오지 못했습니다.');
    this.name = 'ApiError';
  }
}

export const requestApi = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const body: unknown = await response.json().catch(() => null);
    const message =
      typeof body === 'object' &&
      body !== null &&
      'message' in body &&
      typeof body.message === 'string'
        ? body.message.trim()
        : undefined;

    const publicMessage =
      response.status >= 400 && response.status < 500
        ? message || undefined
        : undefined;

    throw new ApiError(response.status, publicMessage);
  }

  return response.json();
};
