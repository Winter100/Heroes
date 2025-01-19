"use client";
import Column from "../../layout/Column";
import Stats from "../detail/Stats";
import CharacterInfoBox from "./CharacterInfoBox";
import { useCharacterStore } from "@/app/_store/characterStore";

const CharacterDetailItem = () => {
  const basic =
    useCharacterStore((state) => state.selectedCharacter?.basic) ?? [];
  const stats =
    useCharacterStore((state) => state.selectedCharacter?.stat) ?? [];

  return (
    <Column className="flex h-full items-center justify-center gap-1 p-1 text-xs text-gray-300">
      <CharacterInfoBox
        basic={basic}
        className="h-28 rounded-lg border border-gray-600 p-1 sm:h-32"
      />
      <Stats className="rounded-lg border border-gray-600 p-2" stats={stats} />
    </Column>
  );
};

export default CharacterDetailItem;
