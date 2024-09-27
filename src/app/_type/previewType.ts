import { EquipmentType } from "./equipmentType";

export interface PreviewStatsType {
  stat_name: string;
  stat_value: string;
}

export interface PreviewSelectedType {
  slot: string;
  previewName: string;
  stat_name: string;
  stat_value: PreviewStatsType[];
}

export interface PrviewItemProps {
  item: EquipmentType;
  slot: string;
}
