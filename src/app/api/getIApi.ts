export const getApi = async <T>(path: string): Promise<T[]> => {
  try {
    const url = process.env.BACKEND_URL;
    const response = await fetch(`${url}${path}`, {
      cache: 'force-cache',
      next: {
        tags: [path],
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to ${path} fetch data`);
    }

    return response.json();
  } catch {
    return [];
  }
};
