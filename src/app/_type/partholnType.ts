export interface PartholnApiType {
  name: number;
  rank: number;
  affix: {
    name: string;
    value: 'PARTHOLN';
  };
  effects: {
    stat_name: string;
    stat_value: string;
  }[];
}
export interface PartholnType {
  name: number;
  rank: number;
  affix: 'partholn';
  effects: {
    stat_name: string;
    stat_value: string;
  }[];
}
