export const getApi = async <T>(path: string): Promise<T[]> => {
  const url = process.env.BACKEND_URL;
  const response = await fetch(`${url}${path}`, {
    next: {
      tags: [path],
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
