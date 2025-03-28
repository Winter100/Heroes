import { imageMap } from "../_constant/imageList";

const getBasicSlotImage = (slot: string): string => {
  return basicSlotImages[slot] || "/images/hereta.png";
};

export const getImageByName = (name: string, slot?: string) => {
  if (imageMap.has(name.trim())) {
    return imageMap.get(name.trim()) || "/images/hereta.png";
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

  // 아바타 기본 슬롯
  ["Avatar_Helm"]: "/images/cach/helm.png",
  ["Avatar_Rear"]: "/images/cach/rear.png",
  ["Avatar_Weapon"]: "/images/cach/weapon.png",
  ["Avatar_Tunic"]: "/images/cach/tunic.png",
  // ["(Unknown)"]: "/images/cach/tunic.png",
  ["Avatar_Pants"]: "/images/cach/pants.png",
  ["Avatar_Gloves"]: "/images/cach/gloves.png",
  ["Avatar_Tail"]: "/images/cach/tail.png",
  ["Avatar_Boots"]: "/images/cach/boots.png",

  // 캐시 기본 슬롯
  ["Right Epaulet"]: "/images/cach/right-epaulet.png",
  ["Hair"]: "/images/cach/hair.png",
  ["Left Epaulet"]: "/images/cach/left-epaulet.png",
  ["FacePainting"]: "/images/cach/facepainting.png",
  ["Lens"]: "/images/cach/lens.png",
  ["Scar"]: "/images/cach/scar.png",
  ["Inner Armor"]: "/images/cach/innerarmor.png",
  ["MakeUp"]: "/images/cach/makeup.png",
  ["Body Shape"]: "/images/cach/bodyshape.png",
  ["BodyPainting"]: "/images/cach/bodypainting.png",
  ["Badge"]: "/images/cach/badge.png",
};
