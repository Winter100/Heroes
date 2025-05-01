import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getImageByName } from '@/app/_utils/getImageByName';
import { ProfileImageProps } from '../../types';

const ProfileImage = ({ job, name }: ProfileImageProps) => {
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

export default ProfileImage;
