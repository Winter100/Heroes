import { ItemTitleType } from './itemTitleType';

interface InfusionType {
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

interface SelectedHandlerType {
  (infusionName: string, infusionEffects: InfusionEffectsType[]): void;
}

export interface InfusionsDialogProps {
  label: string;
  items: ItemTitleType;
  selectedValue: string;
  selectedHandler: SelectedHandlerType;
  infusionList: InfusionType[];
}

export interface InfusionGroupProps
  extends Omit<InfusionsDialogProps, 'label' | 'items'> {
  title: string;
}

export interface InfusionGridItemProps {
  infusion: InfusionType;
  isSelected: boolean;
  selectedHandler: SelectedHandlerType;
}

export interface InfusionValuesProps {
  infusionValue: InfusionEffectsType[];
}
