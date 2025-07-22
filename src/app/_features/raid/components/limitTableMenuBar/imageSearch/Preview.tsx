import Image from 'next/image';
import { PrivewProps } from '../../../types';
import { getImageByName } from '@/app/_utils/get/getImageByName';

const Preview = ({ pastedImage }: PrivewProps) => {
  return (
    <div className="relative mt-2 h-40 w-full">
      {pastedImage && (
        <Image
          className="object-contain"
          src={pastedImage || getImageByName('')}
          fill
          alt="캡처 이미지"
        />
      )}
    </div>
  );
};

export default Preview;
