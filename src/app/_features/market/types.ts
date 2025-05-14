import { ComponentProps } from 'react';

export interface EnchantRankTableProps extends ComponentProps<'table'> {
  enchantData: {
    upgreadeType: string;
    rank: string;
    name: string;
    drop_item_list: string[];
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
}
