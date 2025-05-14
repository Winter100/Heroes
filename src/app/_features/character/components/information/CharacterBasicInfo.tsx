'use client';
import { useBasic } from '@/app/_hooks/useBasic';
import { useGuild } from '@/app/_hooks/useGuild';
import { mergeProfileData } from '@/app/_features/character/utils/mergeProfileData';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import InformationFilterBtn from './InformationFilterBtn';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ProfileImage from './ProfileImage';
import CharacterProfile from './CharacterProfile';

const CharacterBasicInfo = ({ ocid }: { ocid: string }) => {
  const { basic, isLoading, error } = useBasic(ocid);
  const { guild, isLoading: guildLoading } = useGuild(ocid);

  if (isLoading || guildLoading) return <Loading />;
  if (error) return <ErrorApi />;

  const mergedProfileData = mergeProfileData(basic, guild);

  return (
    <div className="flex h-full flex-col gap-1">
      <InformationFilterBtn />
      <div className="flex h-full gap-2">
        <RoundedContainer className="h-full w-full max-w-36">
          <ProfileImage
            job={basic?.character_class_name}
            name={basic?.character_name}
          />
        </RoundedContainer>
        <RoundedContainer className="flex flex-1">
          <CharacterProfile profileData={mergedProfileData || []} />
        </RoundedContainer>
      </div>
    </div>
  );
};

export default CharacterBasicInfo;
