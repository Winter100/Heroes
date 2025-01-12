"use client";

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useCharacterStore } from "@/app/_store/characterStore";
import { useRankStore } from "@/app/_store/rankStore";

import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { getLocalStorageItems } from "@/app/_utils/localStorage";
import { LOCALSTORAGE_KEY } from "@/app/_constant/localstorage";
import { MergedCharacter } from "@/app/_type/characterType";
import { useRaidStore } from "@/app/_store/raidStore";

import { useCheckStore } from "@/app/_store/checkStore";
import { filterCharacters } from "../utils/filterCharacters";
import CheckBox from "@/app/_components/common/CheckBox";
import LimitStat from "../stat/LimitStat";

const LimitTableBody = () => {
  const characters = useCharacterStore((state) => state.characters);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter,
  );
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const setDropCharacterList = useCharacterStore(
    (state) => state.setDropCharacterList,
  );

  const selectedTitleList = useRankStore((state) => state.rankTitleList);

  const filteredCharacters = filterCharacters(characters, selectedTitleList);

  const setSeletRankTitle = useRankStore((state) => state.setSeletRankTitle);

  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(
    setDropCharacterList,
    () => setSeletRankTitle(null),
  );

  const selectedBoss = useRaidStore((state) => state.selectedBoss);

  const checkedList = useCheckStore((state) => state.checkedList);
  const setChecked = useCheckStore((state) => state.setChecked);

  const onCheck = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
    e.stopPropagation();
    setChecked(name);
  };

  useEffect(() => {
    const waitingList =
      getLocalStorageItems<MergedCharacter[]>(LOCALSTORAGE_KEY.waiting) ?? [];
    waitingList.slice(0, 8).map((c) => addCharacter(c));
  }, [addCharacter]);

  return (
    <tbody
      className={`${characters.length >= 1 ? "border" : "border-none"} grid h-full w-full grid-rows-8 rounded-lg border-borderColor text-[10px] sm:text-xs`}
    >
      {filteredCharacters.slice(0, 8).map((c, i) => (
        <tr
          key={uuidv4()}
          onClick={() => {
            const name = c?.info?.find(
              (s) => s?.stat_name === "이름",
            )?.stat_value;
            selectedHandler(name ?? "");
          }}
          draggable
          onDragStart={(e) => dragStart(e, i)}
          onDragEnd={dragEnd}
          onDragOver={dragOver}
          onDragEnter={() => dragEnter(i)}
          className={`flex flex-1 ${selectedCharacter?.name === c?.name ? "text-blue-300" : ""} min-h-10 w-full items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-600`}
        >
          {/* 체크박스 */}
          <td className="flex h-full w-12 items-center justify-center">
            <div onClick={(e) => onCheck(e, c?.name ?? "")}>
              <CheckBox checked={checkedList.includes(c?.name ?? "")} />
            </div>
          </td>
          {c?.info?.map((i) => (
            <td
              className="flex h-full flex-1 items-center justify-center"
              key={i?.stat_name + i?.stat_value}
            >
              <div className="flex flex-col items-center justify-center">
                <span>{i?.stat_value}</span>
                {selectedBoss && (
                  <LimitStat
                    characterName={c?.name ?? ""}
                    selectedBoss={selectedBoss}
                    {...i}
                  />
                )}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default LimitTableBody;
