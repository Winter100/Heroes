export type BasicItemInfoType = {
  item_name: string;
  item_crafting: string[];
  item_description: string;
  item_rating: Item_Rating;
};

export interface ItemRatingType {
  item_rating: Item_Rating;
}

export type Item_Rating =
  | "일반"
  | "초급"
  | "중급"
  | "고급"
  | "레어"
  | "전설"
  | null;

type Stat = {
  stat_name: string;
  stat_value: number;
};

type ItemStats = Record<number | string, Stat[]>;

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
  // stats?: {
  //   stat_name: string;
  //   stat_value: number;
  // }[];
  enhancement_options?: ItemStats;
}
export interface ItemInfoType {
  name: string;
  rating: Item_Rating;
  max_stage?: number;
  base_quality: number;
  quality_selection_available: boolean;
  base_is_color: boolean;
  category: string[];
  set_name?: string;
  restrictions?: string[];
  base_stat?: Stat[];
  description?: string;
}
