export const getApi = async <T>(
  path: string,
  options?: RequestInit
): Promise<T[]> => {
  try {
    const url = process.env.BACKEND_URL;
    const response = await fetch(`${url}${path}`, {
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Failed to ${path} fetch data`);
    }

    return response.json();
  } catch {
    return [];
  }
};
