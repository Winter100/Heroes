export const splitStringAndNumber = (existingName: string) => {
  const level = existingName.match(/\d+/)?.[0] || "";
  const name = existingName.replace(/\d+/g, "").trim();

  return {
    name,
    level: Number(level),
  };
};
