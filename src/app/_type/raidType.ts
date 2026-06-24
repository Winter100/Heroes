import { Stat } from './previewType';

export const item_filter = {
  equipment: '장비',
  materials: '재료',
  consumables: '소모품',
  enchant: '인챈트',
} as const;

export interface MonstersOmitEntry {
  raid_name: string;
  monsters: Omit<MonstersType, 'entry'>[];
}

export interface MonstersOmitLimit {
  raid_name: string;
  monsters: Omit<MonstersType, 'limit'>[];
}

export interface MonstersType {
  battle: string;
  basic_reward?: { name: string; value: string }[];
  entry: Stat[];
  limit: Stat[];
  drop_items: {
    item_name: string;
    item_description?: string[];
    item_filter: (typeof item_filter)[keyof typeof item_filter];
    core_boost_apply: boolean;
    core_boost_drop: boolean;
  }[];
  raid_description?: string;
  bonus: { bonus_description: string; bonus_value: string }[];
  image?: string;
}

export interface RaidListType {
  raid_name: string;
  monsters: MonstersType[];
}
