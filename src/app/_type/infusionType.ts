import { ItemTitleType } from "./itemTitleType";

export interface InfusionType {
  rank: string;
  stat_name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
}

export interface InfusionEffectsType {
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

export interface InfusionsContentProps
  extends Omit<InfusionsDialogProps, "label" | "items"> {}

export interface InfusionGroupProps extends InfusionsContentProps {
  title: string;
}

export interface InfusionGridProps extends InfusionsContentProps {}

export interface InfusionGridItemProps {
  infusion: InfusionType;
  isSelected: boolean;
  selectedHandler: SelectedHandlerType;
}

export interface InfusionValuesProps {
  infusionValue: InfusionEffectsType[];
}
