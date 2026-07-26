export interface PreviewSelectedType {
  slot: string;
  upgreadeType: string;
  name: string;
  stat_value: Stat[];
}

export interface beforeAndAfterStatsType {
  rank: string;
  name: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  upgreadeType: string;
}

export type Stat = {
  stat_name: string;
  stat_value: string | number;
  image?: string;
};

export type Item = {
  slot: string;
  upgreadeType: string;
  name: string;
  stat_value: Stat[];
};

export type CombinedStats = {
  [key: string]: number; // stat_name에 해당하는 값들을 합칠 객체의 타입
};
