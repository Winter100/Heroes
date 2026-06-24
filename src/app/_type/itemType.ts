type ItemBonus = {
    level: number;
    stat_bonus: { stat_name: string; stat_value: number }[];
};

type ItemSlot = {
    item_name: string;
    item_slot: string;
};

export type ItemSetType = {
    item_set_name: string;
    item_set_list: string[];
    item_set_slot: ItemSlot[];
    item_set_bonus: ItemBonus[];
};