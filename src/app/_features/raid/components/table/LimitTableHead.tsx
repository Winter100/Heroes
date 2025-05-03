'use client';

import { useEffect } from 'react';
import { useDrag } from '@/app/_hooks/useDrag/useDrag';
import { useRankStore } from '@/app/_store/rankStore';
import { useCheckStore } from '@/app/_store/checkStore';
import { useCharacterStore } from '../../store/characterStore';

import {
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

const LimitTableHead = () => {
  const rankTitleList = useRankStore((state) => state.rankTitleList);
  const selectedRankTitle = useRankStore((state) => state.selectedRankTitle);
  const setDropTitleList = useRankStore((state) => state.setDropTitleList);
  const toggleView = useRankStore((state) => state.toggleView);
  const setSeletRankTitle = useRankStore((state) => state.setSeletRankTitle);

  const setSortCharacterList = useCharacterStore(
    (state) => state.setSortCharacterList
  );
  const characters = useCharacterStore((state) => state.characters);
  const characterLength = characters.length;
  const userName = characters.map((c) => c.name);

  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(setDropTitleList);

  const onRemove = (
    e: React.MouseEvent<HTMLButtonElement>,
    statName: string
  ) => {
    e.stopPropagation();
    toggleView(statName);
  };

  const sort = (title: string) => {
    setSeletRankTitle(title);
  };

  const allChecked = useCheckStore((state) => state.checkedList.length);
  const setAllChecked = useCheckStore((state) => state.setAllChecked);
  const onAllCheck = () => {
    setAllChecked(userName);
  };

  useEffect(() => {
    if (selectedRankTitle) {
      setSortCharacterList(
        selectedRankTitle?.titleName,
        selectedRankTitle?.ascending
      );
    }
  }, [setSortCharacterList, selectedRankTitle]);

  return (
    <>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="cursor-pointer bg-muted/50">
          {rankTitleList[0] && (
            <TableHead className="w-6" onClick={onAllCheck}>
              <Checkbox
                checked={
                  characterLength === allChecked &&
                  characterLength >= 1 &&
                  allChecked >= 1
                }
              />
            </TableHead>
          )}
          {rankTitleList?.map(
            (t, i) =>
              t?.isView && (
                <TableHead
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
                      className={` ${selectedRankTitle?.titleName === t.stat_name ? (selectedRankTitle.ascending === false ? 'text-green-300' : 'text-red-300') : 'text-white'} flex h-full w-full items-center justify-center rounded-lg text-[10px] hover:bg-zinc-600 md:text-xs`}
                    >
                      {t?.stat_name}
                    </span>
                    {t.stat_name !== '이름' && (
                      <button
                        onClick={(e) => onRemove(e, t?.stat_name)}
                        className="absolute right-0 top-0 hidden h-5 w-5 items-center justify-center rounded-lg border-none text-[10px] text-red-200 hover:text-red-400 sm:block"
                      >
                        X
                      </button>
                    )}
                  </div>
                </TableHead>
              )
          )}
        </TableRow>
      </TableHeader>
    </>
  );
};

export default LimitTableHead;
