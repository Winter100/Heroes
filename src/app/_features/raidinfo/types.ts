interface RaidEntryAndLimitStats {
  stat_name: string;
  stat_value: string;
}

export interface Drop_items {
  item_name: string;
  item_description?: string[];
  item_filter: '장비' | '재료' | '소모품' | '인챈트';
  core_boost_apply: boolean;
  core_boost_drop: boolean;
}

export interface Bonus {
  bonus_description: string;
  bonus_value: string;
}
export interface RaidTableDialogProps {
  boss_name: string;
  boss_level: string;
  basic_reward?: RewardType[];
  region: string;
  name: string;
  entry: RaidEntryAndLimitStats[];
  limit: RaidEntryAndLimitStats[];
  drop_items: Drop_items[];
  raid_description?: string;
  bonus: Bonus[];
  children?: React.ReactNode;
}

export interface LimitStatsFilterType {
  name: string;
  entry: RaidEntryAndLimitStats[];
  limit: RaidEntryAndLimitStats[];
  drop_items: Drop_items[];
  bonus: Bonus[];
}

export interface RewardType {
  name: string;
  value: string;
}

export type RaidTableDialogHeaderProps = Omit<
  RaidTableDialogProps,
  | 'region'
  | 'entry'
  | 'limit'
  | 'drop_items'
  | 'raid_description'
  | 'children'
  | 'bonus'
>;

export type RaidTableDialogBodyProps = Omit<
  RaidTableDialogProps,
  | 'region'
  | 'raid_description'
  | 'children'
  | 'basic_reward'
  | 'boss_level'
  | 'boss_name'
>;
