'use client';
import { useBasic } from '@/app/_hooks/useBasic';
import { useGuild } from '@/app/_hooks/useGuild';
import { mergeProfileData } from '@/app/_features/character/utils/mergeProfileData';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import InformationFilterBtn from './InformationFilterBtn';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import CharacterProfile from './CharacterProfile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import ImageIcon from '@/app/_components/common/image/Image-Icon';

const CharacterBasicInfo = ({ ocid }: { ocid: string }) => {
  const { basic, isLoading, error } = useBasic(ocid);
  const { guild, isLoading: guildLoading } = useGuild(ocid);

  if (isLoading || guildLoading) return <Loading />;
  if (error) return <ErrorApi />;

  const mergedProfileData = mergeProfileData(basic, guild);
  const src = getImageByName(basic?.character_class_name);
  const job = basic.character_class_name;
  return (
    <div className="flex h-full flex-col gap-1">
      <InformationFilterBtn />
      <div className="flex h-full gap-2">
        <RoundedContainer className="h-full w-full max-w-36">
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-2">
            <AspectRatio ratio={4 / 3}>
              <ImageIcon
                className="m-auto h-full w-full rounded-md object-contain"
                src={src}
                alt={job}
              />
            </AspectRatio>

            <div className="w-full text-center text-sm">
              {basic?.character_name}
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer className="flex flex-1">
          <CharacterProfile profileData={mergedProfileData || []} />
        </RoundedContainer>
      </div>
    </div>
  );
};

export default CharacterBasicInfo;
