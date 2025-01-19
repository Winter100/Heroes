"use client";

import { useEffect } from "react";

import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { useRankStore } from "@/app/_store/rankStore";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useCheckStore } from "@/app/_store/checkStore";
import CheckBox from "@/app/_components/common/CheckBox";

const LimitTableHead = () => {
  // 커스텀 훅, 컴포넌트 분리하기
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const setSortCharacterList = useCharacterStore(
    (state) => state.setSortCharacterList,
  );
  const selectedRankTitle = useRankStore((state) => state.selectedRankTitle);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const toggleView = useRankStore((state) => state.toggleView);

  const setSeletRankTitle = useRankStore((state) => state.setSeletRankTitle);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  const onRemove = (
    e: React.MouseEvent<HTMLButtonElement>,
    statName: string,
  ) => {
    e.stopPropagation();
    toggleView(statName);
  };

  const sort = (title: string) => {
    setSeletRankTitle(title);
  };

  useEffect(() => {
    if (selectedRankTitle) {
      setSortCharacterList(
        selectedRankTitle?.titleName,
        selectedRankTitle?.ascending,
      );
    }
  }, [setSortCharacterList, selectedRankTitle]);

  const characters = useCharacterStore((state) => state.characters);
  const characterLength = characters.length;
  const userName = characters.map((c) => c.name);
  const allChecked = useCheckStore((state) => state.checkedList.length);
  const setAllChecked = useCheckStore((state) => state.setAllChecked);

  const onAllCheck = () => {
    setAllChecked(userName);
  };

  const checked =
    characterLength === allChecked && characterLength >= 1 && allChecked >= 1;

  return (
    <thead className="h-8 w-full items-center justify-center rounded-lg border border-borderColor">
      <tr className="relative flex h-full w-full items-center justify-center rounded-lg">
        {rankTitleList[0] && (
          <th className="flex h-full w-12 items-center justify-center text-xs md:text-xl">
            <div
              onClick={onAllCheck}
              className="flex items-center justify-center"
            >
              <CheckBox checked={checked} />
            </div>
          </th>
        )}
        {rankTitleList?.map(
          (t, i) =>
            t?.isView && (
              <th
                className={`flex h-full w-full flex-1 items-center justify-center rounded-lg hover:cursor-pointer`}
                key={t?.stat_name}
                onClick={() => sort(t.stat_name)}
                draggable
                onDragOver={dragOver}
                onDragStart={(e) => dragStart(e, i)}
                onDragEnter={() => dragEnter(i)}
                onDragEnd={dragEnd}
              >
                <div className="relative h-full w-full">
                  <span
                    className={` ${selectedRankTitle?.titleName === t.stat_name ? (selectedRankTitle.ascending === false ? "text-green-300" : "text-red-300") : "text-white"} flex h-full w-full items-center justify-center rounded-lg text-[10px] hover:bg-zinc-600 md:text-xs`}
                  >
                    {t?.stat_name}
                  </span>
                  {t.stat_name !== "이름" && (
                    <button
                      onClick={(e) => onRemove(e, t?.stat_name)}
                      className="absolute right-0 top-0 hidden h-5 w-5 items-center justify-center rounded-lg border-none text-[10px] text-red-200 hover:text-red-400 sm:block"
                    >
                      X
                    </button>
                  )}
                </div>
              </th>
            ),
        )}
      </tr>
    </thead>
  );
};

export default LimitTableHead;
