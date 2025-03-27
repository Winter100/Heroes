"use client";
import RoundedContainer from "../layout/RoundedContainer";
import CharacterProfile from "./CharacterProfile";
import CharacterProfileImage from "./CharacterProfileImage";
import Loading from "../common/Loading";
import { useBasic } from "@/app/_hooks/useBasic";
import { useGuild } from "@/app/_hooks/useGuild";
import ChracterItemFilter from "./ChracterItemFilter";

const CharacterBasicInfo = ({ ocid }: { ocid: string }) => {
  const { basic, isLoading } = useBasic(ocid || "");
  const { guild, isLoading: guildLoading } = useGuild(ocid);

  if (isLoading || guildLoading) {
    return <Loading />;
  }

  const profileData = [
    { title: "카르제", value: basic?.cairde_name },
    { title: "직업", value: basic?.character_class_name },
    { title: "레벨", value: basic?.character_level },
    { title: "타이틀", value: basic?.total_title_count },
    { title: "길드", value: guild?.guild_name },
  ];

  return (
    <div className="flex flex-1 flex-col gap-1">
      <ChracterItemFilter />
      <div className="flex h-full gap-2">
        <RoundedContainer className="h-full w-full max-w-36 border border-border">
          <CharacterProfileImage
            job={basic?.character_class_name}
            name={basic?.character_name}
          />
        </RoundedContainer>
        <RoundedContainer className="flex max-w-60 flex-1 border border-border">
          <CharacterProfile profileData={profileData || []} />
        </RoundedContainer>
      </div>
    </div>
  );
};

export default CharacterBasicInfo;
