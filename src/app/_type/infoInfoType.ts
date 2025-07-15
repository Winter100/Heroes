export type BasicItemInfoType = {
  item_name: string;
  item_crafting: string[];
  item_description: string;
  item_rating: Item_Rating;
};

export type Item_Rating =
  | '일반'
  | '초급'
  | '중급'
  | '고급'
  | '레어'
  | '전설'
  | null;

type Stat = {
  stat_name: string;
  stat_value: number | string;
};

type ItemStats = Record<number, Stat[]>;

export interface ItemType {
  name: string;
  restrictions?: string[];
  quality: number;
  quality_selection_available: boolean;
  quality_stats?: string[];
  rating: Item_Rating;
  category: string[];
  color: boolean;
  set?: string;
  grinding?: boolean;
  description?: string;
  tuning_stat?: { stat_name: string; stat_value: number }[];
  slot?: string;
  enhancement_options?: ItemStats;
}
