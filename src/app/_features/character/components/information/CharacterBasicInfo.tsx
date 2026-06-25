'use client';
import { useBasic } from '@/app/_hooks/useBasic';
import { useGuild } from '@/app/_hooks/useGuild';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { mergeProfileData } from '@/app/_utils/convert';

const CharacterBasicInfo = ({ ocid }: { ocid: string }) => {
  const { basic, isLoading, error } = useBasic(ocid);
  const { guild, isLoading: guildLoading } = useGuild(ocid);

  if (isLoading || guildLoading) return <Loading />;
  if (error) return <ErrorApi />;

  const mergedProfileData = mergeProfileData(basic, guild);

  return (
    <div className="flex h-full flex-col gap-1">
      <div className="flex h-full gap-2">
        <RoundedContainer className="h-full w-full max-w-36">
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-2">
            <AspectRatio ratio={4 / 3}></AspectRatio>
            <div className="w-full text-center text-sm">
              {basic?.character_name}
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer className="flex flex-1">
          <div className="w-full text-sm">
            <ul className="flex h-full flex-col">
              {mergedProfileData?.map((data) => (
                <li
                  key={data?.title}
                  className="flex flex-1 items-center gap-2"
                >
                  <div className="w-16">{data.title}</div>
                  <div
                    title={data?.value?.toString()}
                    className="flex-1 truncate"
                  >
                    {data?.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RoundedContainer>
      </div>
    </div>
  );
};

export default CharacterBasicInfo;
