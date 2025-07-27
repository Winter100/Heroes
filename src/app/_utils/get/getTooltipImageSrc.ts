import { getImageByName } from './getImageByName';

export const getTooltipImageSrc = (itemName: string, slot?: string) => {
  const name = slot
    ? itemName.replace(/^(초급|중급|고급|레어|전설)\s*/, '')
    : itemName;
  const src = getImageByName(name, slot);

  return src;
};
