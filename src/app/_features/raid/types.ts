import { MonstersType } from '@/app/_constant/raidList';
import { FormEvent } from 'react';

export interface PrivewProps {
  pastedImage: string | null;
}

export interface SearchFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: FormEvent) => void;
  loading: boolean;
  searchValue: string;
}

export interface LimitStatProps {
  selectedBoss: MonstersType;
  stat_name: string;
  stat_value: string | number;
  characterName: string;
}
