export interface EnchantPriceType {
  next_cursor: string;
  item: [
    {
      date_update: string;
      item_name: string;
      average_price: 0;
      min_price: 0;
      max_price: 0;
      item_option: {
        enhancement_level: 0;
        tuning_stat: [
          {
            stat_name: string;
            stat_value: string;
          },
        ];
        ability_name: string;
        prefix_enchant_preset_1: string;
        suffix_enchant_preset_1: string;
        prefix_enchant_preset_2: string;
        suffix_enchant_preset_2: string;
        power_infusion_preset_1: [
          {
            stat_name: string;
            stat_value: string;
          },
        ];
        power_infusion_preset_2: [
          {
            stat_name: string;
            stat_value: string;
          },
        ];
        bind_release_limit: string;
        item_shape_name: string;
        item_quality: string;
        bracelet_gem_composite: [
          {
            item_name: string;
            stat: [
              {
                stat_name: string;
                stat_value: string;
              },
            ];
          },
        ];
        value: string;
      };
    },
  ];
}

export interface EnchantPrice {
  date_update: string;
  item_name: string;
  average_price: 0;
  min_price: 0;
  max_price: 0;
  item_option: {
    enhancement_level: 0;
    tuning_stat: [
      {
        stat_name: string;
        stat_value: string;
      },
    ];
    ability_name: string;
    prefix_enchant_preset_1: string;
    suffix_enchant_preset_1: string;
    prefix_enchant_preset_2: string;
    suffix_enchant_preset_2: string;
    power_infusion_preset_1: [
      {
        stat_name: string;
        stat_value: string;
      },
    ];
    power_infusion_preset_2: [
      {
        stat_name: string;
        stat_value: string;
      },
    ];
    bind_release_limit: string;
    item_shape_name: string;
    item_quality: string;
    bracelet_gem_composite: [
      {
        item_name: string;
        stat: [
          {
            stat_name: string;
            stat_value: string;
          },
        ];
      },
    ];
    value: string;
  };
}

export interface EnchantDialogProps {
  label: string;
  slot: string;
  upgreadeType: string;
  items: {
    name: string;
    level: string;
  };
  selectedHandler: (
    enchantName: string,
    enchantEffects: {
      stat_name: string;
      stat_value: string;
    }[],
  ) => void;
  enchantList: {
    rank: string;
    stat_name: string;
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  selectedValue: string;
}

export interface EnchantContentProps
  extends Omit<EnchantDialogProps, "label" | "items"> {
  enchantPriceList: EnchantPrice[];
  enchantPriceLoading: boolean;
}

export interface EnchantItemProps {
  slot: string;
  rank: string;
  stat_name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  upgreadeType: string;
  enchantPriceList: EnchantPrice[];
  enchantPriceLoading: boolean;
  isSelected: boolean;
  selectedHandler: (
    enchantName: string,
    enchantValue: { stat_name: string; stat_value: string }[],
  ) => void;
}

export interface EnchantPriceProps {
  label?: string;
  falseLabel?: string;
  avgPrice: number;
  enchantPriceLoading: boolean;
}

interface EnchantList {
  name: string[];
  list: string[];
}

interface Options {
  rank: string;
  stat_name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
}

export interface getUsableItemEnchantListProps {
  enchantList: EnchantList[];
  optionsList: Options[];
  slot: string;
}

export interface getEnchantAvgPricePropsP {
  upgreadeType: string;
  enchantPriceList: EnchantPrice[];
  enchantName: string;
}
