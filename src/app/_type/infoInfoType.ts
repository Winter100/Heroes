export type BasicItemInfoType = {
  item_name: string;
  item_crafting: string[];
  item_description: string;
  item_rating: Item_Rating;
};

export interface ItemRatingType {
  item_rating: Item_Rating;
}

export type Item_Rating = "일반" | "초급" | "중급" | "고급" | "레어" | "전설";
