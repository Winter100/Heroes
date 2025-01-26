import { imageMap } from "../_constant/imageList";

export const getImageByName = (name: string) => {
  return imageMap.get(name) || "/images/헤레타.png";
};
