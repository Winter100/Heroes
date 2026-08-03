'use client';
import { useGuild, useBasic } from '@/app/_hooks';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { mergeProfileData } from '@/app/_utils/convert';
import Image from 'next/image';
import { CharacterInfo } from '@/app/_type/characterType';

type Props = {
  ocid: string;
  character: CharacterInfo[];
};

const CharacterBasicInfo = ({ ocid, character }: Props) => {
  const { basic, isLoading, error } = useBasic(ocid);
  const { guild, isLoading: guildLoading } = useGuild(ocid);

  if (isLoading || guildLoading)
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loading />
      </div>
    );
  if (error) return <ErrorApi />;

  const mergedProfileData = mergeProfileData(basic, guild);
  const characterImage =
    character?.find((c) => c.name === basic.character_class_name)?.image ?? '';
  const src =
    characterImage?.length > 1 ? characterImage : '/images/hereta.png';

  return (
    <div className="flex h-full flex-col gap-1">
      <div className="flex h-full gap-2">
        <RoundedContainer className="h-full w-full max-w-36">
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-2">
            <AspectRatio ratio={3 / 3}>
              <Image src={src} alt={basic?.character_name ?? ''} fill />
            </AspectRatio>
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
