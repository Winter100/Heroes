import { Item_Rating } from '@/app/_type/infoInfoType';

interface ConvertResult {
  itemName: string;
  gradeMatch: Item_Rating;
}
export const convertItemNameBySlot = (
  name: string,
  slot: string
): ConvertResult => {
  if (slot !== 'Right Hand') return { itemName: name, gradeMatch: null };

  const baseNames = ['밀레시안', '아르드리', '오르나', '와드네', '에리우'];
  const gradeNames: Item_Rating[] = ['초급', '중급', '고급', '레어', '전설'];

  const baseMatch = baseNames.find((base) => name.includes(base));
  if (!baseMatch) return { itemName: name, gradeMatch: null };

  const itemName = `${baseMatch} 무기`;
  // gradeMatch가 undefined일 수 있으므로 기본값 설정
  const gradeMatch =
    gradeNames.find((grade) => name.includes(grade || '')) || null;

  return { itemName, gradeMatch };
};
