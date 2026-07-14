import { unImageList } from '@/app/_constant/deleteT/qwer';
import { imageMap } from '@/app/_constant/imageList';

export const PATCH = async (request: Request) => {
  for (const item of unImageList) {
    console.log(`${item.name} 시작`);
    const itemImage = imageMap.get(item.name);
    if (!itemImage) {
      console.log(`${itemImage} 이미지가 없습니다.`);
      continue;
    }

    try {
      const file = await convertUrlToFile(itemImage);
      const formData = new FormData();

      formData.append('name', item.name);
      formData.append('image', file);

      await fetch('http://localhost:8080/items/update', {
        method: 'PATCH',
        body: formData,
      });

      console.log(`${itemImage} 업로드 완료`);
    } catch (e) {
      console.error(e);

      continue;
    }
  }
};

async function convertUrlToFile(url: string): Promise<File> {
  // 1. public 폴더의 이미지를 fetch로 호출하여 가져옵니다.
  const response = await fetch(url);
  const blob = await response.blob();

  // 2. URL 경로에서 파일명 추출 (예: recipe.png)
  const fileName = url.split('/').pop() || 'image.png';

  // 3. 백엔드로 전송할 수 있는 File 객체로 변환하여 반환
  return new File([blob], fileName, { type: blob.type });
}
