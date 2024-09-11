"use client";
import { useState } from "react";

import { useRankStore } from "@/app/_store/rankStore";
import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import Button from "@/app/_components/common/Button";
import BottomArrow from "@/app/_components/common/BottomArrow";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick/useOutsideClick";

const StatDropDownMenu = () => {
  const [view, setView] = useState(false);
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const toggleView = useRankStore((state) => state.toggleView);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  const dropdownRef = useOutsideClick(() => {
    setView(false);
  });

  return (
    <div className="inline-block h-full w-24" ref={dropdownRef}>
      <Button
        onClick={() => setView((pre) => !pre)}
        className="flex h-full w-full items-center justify-center"
      >
        <span>스텟 추가</span>
        <BottomArrow />
      </Button>
      <div
        className={`absolute z-10 mt-1 flex w-24 flex-col rounded-lg bg-black transition-all duration-300 ease-in-out ${view ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[10px] opacity-0"} `}
      >
        {rankTitleList?.map((t, i) => (
          <button
            draggable={t.isView}
            key={t.stat_name}
            onClick={() => toggleView(t.stat_name)}
            onDragStart={(e) => dragStart(e, i)}
            onDragOver={dragOver}
            onDragEnter={() => dragEnter(i)}
            onDragEnd={() => dragEnd()}
            className={`h-8 rounded-lg hover:bg-zinc-700 ${t.isView === true ? "text-blue-300" : "text-red-300"}`}
          >
            {t.stat_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatDropDownMenu;