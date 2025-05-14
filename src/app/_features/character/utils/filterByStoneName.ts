import { SkillData } from '../types';
import { extractNumber } from './extractValue';

export const filterByStoneName = (
  skill: SkillData[],
  include: string[],
  exclude: string[] = []
) => {
  return skill
    .filter(
      (s) =>
        include.every((inc) => s.item_name.includes(inc)) &&
        exclude.every((exc) => !s.item_name.includes(exc))
    )
    .sort((a, b) => {
      const numA = extractNumber(a.item_name);
      const numB = extractNumber(b.item_name);
      if (numA === null || numB === null) return 0;
      return numB - numA;
    });
};
