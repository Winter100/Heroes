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
    <Column className="flex h-full w-52 items-center justify-center gap-1 p-1 text-[10px] sm:w-72 sm:text-xs">
      <CharacterInfoBox
        basic={basic}
        className="h-28 rounded-lg border border-gray-600 p-1 sm:h-40"
      />
      <Stats className="rounded-lg border border-gray-600 p-2" stats={stats} />
    </Column>
  );
};

export default CharacterDetailItem;
