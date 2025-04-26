export interface RaidTableDialogProps {
  boss_name: string;
  boss_level: string;
  basic_reward?: { name: string; value: string }[];
  region: string;
  name: string;
  entry: {
    stat_name: string;
    stat_value: string;
  }[];
  limit: {
    stat_name: string;
    stat_value: string;
  }[];
  drop_items: {
    item_name: string;
    item_description?: string[];
    core_boost_apply: boolean;
    core_boost_drop: boolean;
    item_filter: '장비' | '인챈트' | '소모품' | '재료';
  }[];
  raid_description?: string;
  bonus: { bonus_description: string; bonus_value: string }[];
  children: React.ReactNode;
}
