"use client";

import { useDetailStore } from "@/app/_store/DetailStore";

import Column from "../../layout/Column";
import CharacterInfoBox from "./CharacterInfoBox";
import Stats from "../characterInfoPanel/detail/Stats";
import { useCharacterStore } from "@/app/_store/characterStore";

const CharacterDetailItem = () => {
  const title = useDetailStore((state) => state.stats);
  const basic =
    useCharacterStore((state) => state.selectedCharacter?.basic) ?? [];
  const stats =
    useCharacterStore((state) => state.selectedCharacter?.stat) ?? [];

  return (
    <Column className="h-full w-80 gap-1 p-1 text-xs">
      {title && (
        <>
          <CharacterInfoBox
            basic={basic}
            className="h-full max-h-32 rounded-lg border border-gray-600 p-1"
          />
          <Stats
            className="h-full rounded-lg border border-gray-600 p-2 text-white"
            stats={stats}
          />
        </>
      )}
    </Column>
  );
};

export default CharacterDetailItem;
