import { CachItemsType, NewEquipmentType } from '@/app/_type/equipmentType';

export interface CharacterProfileProps {
  profileData: { title: string; value: string | number }[];
}

export interface ItemGridDisplayProps {
  bag: NewEquipmentType[];
  cach: CachItemsType[];
}

export interface SkillData {
  skill_name: string;
  item_name: string;
}
export interface SkillAwakeningProps {
  itemName: string;
  title: string;
  jobName: string;
  skillData: SkillData[];
}

export interface SkillPopoverProps {
  jobName: string;
  skill: SkillData;
}

export interface SkillDescriptionProps {
  skillName: string;
  jobName: string;
}
