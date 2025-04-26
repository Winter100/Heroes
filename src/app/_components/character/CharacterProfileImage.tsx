import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { getImageByName } from '@/app/_utils/getImageByName';

interface CharacterProfileImageProps {
  job: string;
  name: string;
}

const CharacterProfileImage = ({ job, name }: CharacterProfileImageProps) => {
  const src = getImageByName(job);
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-2">
      <AspectRatio ratio={4 / 3}>
        <Image
          title={job}
          fill
          src={src}
          alt={job}
          className="rounded-md object-contain"
        />
      </AspectRatio>

      <div className="w-full text-center text-sm">{name}</div>
    </div>
  );
};

export default CharacterProfileImage;
