import { ItemType } from "@/app/_type/infoInfoType";
import { right_hand_list } from "./item_detail/right_hand_list";
import { upper_list } from "./item_detail/upper_list";
import { left_hand_list } from "./item_detail/left_hand_list";
import { head_list } from "./item_detail/head_list";
import { lower_list } from "./item_detail/lower_list";
import { hand_list } from "./item_detail/hand_list";
import { leg_list } from "./item_detail/leg_list";
import { finger_list } from "./item_detail/finger_list";
import { rhod_list } from "./item_detail/rhod_list";
import { belt_list } from "./item_detail/belt_list";
import { earring_list } from "./item_detail/earring_list";
import { necklace_list } from "./item_detail/necklace_list";
import { wrist_list } from "./item_detail/wrist_list";
import { charm_list } from "./item_detail/charm_list";
import { artifact_list } from "./item_detail/artifact_list";

export const item_info: ItemType[] = [
  ...right_hand_list,
  ...left_hand_list,
  ...head_list,
  ...upper_list,
  ...lower_list,
  ...hand_list,
  ...leg_list,
  ...finger_list,
  ...rhod_list,
  ...belt_list,
  ...earring_list,
  ...necklace_list,
  ...wrist_list,
  ...charm_list,
  ...artifact_list,
];
