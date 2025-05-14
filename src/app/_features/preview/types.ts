import {
  MonstersOmitEntry,
  MonstersOmitLimit,
  MonstersType,
} from '@/app/_constant/raidList';
import { InfusionType, SelectedHandlerType } from '@/app/_type/infusionType';
import { PreviewSelectedType, Stat } from '@/app/_type/previewType';
import { ComponentProps } from 'react';
import { EnchantPrice } from '@/app/_type/enchantType';

export type OptionalEntry = Partial<MonstersType>;
export interface MonsterItemProps {
  name: string;
  filter: '빠른전투' | '상한';
  raid: OptionalEntry;
}

export interface TableProps {
  boss: OptionalEntry;
  filter: '상한' | '빠른전투';
}

export interface CalculatorStatProps {
  bossData: OptionalEntry;
  filter: '빠른전투' | '상한';
  stat_name: string;
  stat_value: string | number;
  limitValue: string | number | undefined;
}

export interface BossListProps {
  raidList: (MonstersOmitEntry | MonstersOmitLimit | null)[];
  filter: '빠른전투' | '상한';
}

export interface PreviewStatsProps {
  name: string;
  data: Stat[];
  mergedStats: Stat[];
  statDifference: Stat[];
}

export interface StatsProps extends ComponentProps<'div'> {
  stats: Stat[];
  statDifference?: Stat[];
  isTitle?: boolean;
}

export interface DefferenceStatsProps {
  statDifference: Stat[];
  stat: Stat;
}

export interface PartholnListProps {
  partholn: {
    level: number;
    stat: Stat[];
  }[];
  level: number | null;
  setLevel: (level: number) => void;
  setBeforeStats: (stat: PreviewSelectedType) => void;
}

export interface PartholnTableRowsProps {
  curLevel: number | null;
  partholn: {
    level: number;
    stat: Stat[];
  }[];
  onClick: (level: number, stat: Stat[]) => void;
}

export interface EnchantChangeDialogProps {
  label: string;
  enchantList: {
    rank: string;
    name: string;
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  selectedHandler: (
    enchantName: string,
    enchantEffect: { stat_name: string; stat_value: string }[]
  ) => void;
  upgreadeType: string;
  slot: string;
  items: {
    name: string;
    level: string;
  };
  selectedValue: string;
}

export interface InfusionTabsItemProps {
  data: InfusionType[];
  onClick: SelectedHandlerType;
  selectedValue: string;
}

export interface TabItemsProps {
  rank: string;
  data: (EnchantGroup | null)[];
  upgreadeType: string;
  selectedHandler: (
    enchant: string,
    effect: { stat_name: string; stat_value: string }[]
  ) => void;
  slot: string;
  enchantPriceList: EnchantPrice[];
  enchantPriceLoading: boolean;
  selectedValue: string;
}

export interface Items {
  rank: string;
  name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
}
export interface EnchantGroup {
  rank: string;
  items: Items[];
}

export interface TabEnchantPriceProps {
  enchantPriceLoading: boolean;
  upgreadeType: string;
  enchantPriceList: EnchantPrice[];
  enchant: string;
}
