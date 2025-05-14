import { Jimp, JimpMime } from 'jimp';

export const preprocessImage = async (imageFile: Blob): Promise<File> => {
  try {
    const image = await Jimp.read(await imageFile.arrayBuffer());

    image.greyscale();
    image.threshold({ max: 128 }); // 0-255 사이 임계값
    image.scale(1.3);

    const buffer = await image.getBuffer(JimpMime.png);
    return new File([buffer], 'processed-image.png', { type: 'image/png' });
  } catch (err) {
    console.error('이미지 전처리 실패:', err);
    throw new Error('이미지 전처리 실패');
  }
};
