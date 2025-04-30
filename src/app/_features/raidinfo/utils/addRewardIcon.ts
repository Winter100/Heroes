import { Clover, DollarSign, Sword } from 'lucide-react';
import { RewardType } from '../types';

export const addRewardIcon = (rewardArr: RewardType[] | undefined) => {
  if (!rewardArr) return [];

  return rewardArr?.map((reward) => {
    const { name } = reward;
    if (name === '경험치') return { ...reward, icon: Sword };
    if (name === '골드') return { ...reward, icon: DollarSign };
    if (name === 'AP') return { ...reward, icon: Clover };
  });
};
