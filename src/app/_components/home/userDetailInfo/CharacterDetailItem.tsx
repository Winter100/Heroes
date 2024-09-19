"use client";

import { useDetailStore } from "@/app/_store/DetailStore";

import Column from "../../layout/Column";
import DetailInfoItems from "../characterInfoPanel/detail/DetailInfoItems";
import CharacterInfoBox from "./CharacterInfoBox";

const CharacterDetailItem = () => {
  const stats = useDetailStore((state) => state.stats);
  return (
    <Column className="h-full w-80 gap-1 p-1 text-xs">
      {stats && (
        <>
          <CharacterInfoBox className="h-full max-h-32 rounded-lg border border-gray-600 p-1" />
          <DetailInfoItems />
        </>
      )}
    </Column>
  );
};

export default CharacterDetailItem;
