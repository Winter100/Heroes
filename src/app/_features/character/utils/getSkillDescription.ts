import { skillDescription } from '@/app/_constant/character/skill';

export const getSkillDescription = (skillName: string, jobName: string) => {
  const skills = skillDescription[jobName] || [];
  if (skills.length === 0) return '';
  return skills?.find((s) => s.name === skillName.trim())?.effect;
};
