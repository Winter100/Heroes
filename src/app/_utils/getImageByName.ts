import { imageMap } from "../_constant/imageList";

const getBasicSlotImage = (slot: string): string => {
  return basicSlotImages[slot] || "/images/hereta.png";
};

export const getImageByName = (name: string, slot?: string) => {
  if (imageMap.has(name)) {
    return imageMap.get(name) || "/images/hereta.png";
  } else if (slot) {
    return getBasicSlotImage(slot);
  }
  {
    return "/images/hereta.png";
  }
};

const basicSlotImages: Record<string, string> = {
  ["Right Hand"]: "/images/items/basic/basic-right-hand.png",
  ["Left Hand"]: "/images/items/basic/basic-left-hand.png",
  ["Head"]: "/images/items/basic/basic-head.png",
  ["Upper"]: "/images/items/basic/basic-upper.png",
  ["Lower"]: "/images/items/basic/basic-lower.png",
  ["Hand"]: "/images/items/basic/basic-hand.png",
  ["Leg"]: "/images/items/basic/basic-leg.png",
  ["Earring"]: "/images/items/basic/basic-earring.png",
  ["Left Finger"]: "/images/items/basic/basic-finger.png",
  ["Right Finger"]: "/images/items/basic/basic-finger.png",
  ["Belt"]: "/images/items/basic/basic-belt.png",
  ["Necklace"]: "/images/items/basic/basic-necklace.png",
  ["Rhod"]: "/images/items/basic/basic-rhod.png",
  ["Charm"]: "/images/items/basic/basic-charm.png",
  ["Artifact"]: "/images/items/basic/basic-artifact.png",
  ["Left Wrist"]: "/images/items/basic/basic-bracelet.png",
  ["Right Wrist"]: "/images/items/basic/basic-bracelet.png",
};
