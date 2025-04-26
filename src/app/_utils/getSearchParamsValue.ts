export const getSearchParamsValue = (
  request: { url: string | URL; base?: string | URL },
  keyName: string
) => {
  const { searchParams } = new URL(request.url);
  const searchParamsValue = searchParams.get(keyName);

  return searchParamsValue;
};
