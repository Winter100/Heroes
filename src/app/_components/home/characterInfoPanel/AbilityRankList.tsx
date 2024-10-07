import dynamic from "next/dynamic";
import AbilityRankThead from "./AbilityRankThead";

const NoSSRAbilityRankTbody = dynamic(() => import("./AbilityRankTbody"), {
  ssr: false,
});

const AbilityRankList = () => {
  return (
    <table className="flex h-full max-h-[410px] w-full table-auto flex-col gap-1">
      <caption className="hidden">캐릭터 리스트</caption>
      <AbilityRankThead />
      <NoSSRAbilityRankTbody />
    </table>
  );
};

export default AbilityRankList;
