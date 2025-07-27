import { ItemTitleType } from './itemTitleType';

export interface InfusionType {
  rank: string;
  name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
}

interface InfusionEffectsType {
  stat_name: string;
  stat_value: string;
}

export interface SelectedHandlerType {
  (infusionName: string, infusionEffects: InfusionEffectsType[]): void;
}

export interface InfusionsDialogProps {
  label: string;
  items: ItemTitleType;
  selectedValue: string;
  selectedHandler: SelectedHandlerType;
  infusionList: InfusionType[];
}
