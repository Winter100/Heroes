'use client';

import { useEffect } from 'react';
import { useRankStore } from '@/app/_store/rankStore';
import { useDrag } from '@/app/_hooks/useDrag';
import { getLocalStorageItems } from '@/app/_utils/localStorage';
import { LOCALSTORAGE_KEY } from '@/app/_constant/localstorage';
import { MergedCharacter } from '@/app/_type/characterType';
import { useRaidStore } from '@/app/_store/raidStore';

import { useCheckStore } from '@/app/_store/checkStore';
import { useCharacterStore } from '../../store/characterStore';
import { filterCharacters } from '@/app/_utils/raid/filterCharacters';
import LimitStat from '../stats/LimitStat';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

const LimitTableBody = () => {
  const characters = useCharacterStore((state) => state.characters);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const setDropCharacterList = useCharacterStore(
    (state) => state.setDropCharacterList
  );

  const selectedTitleList = useRankStore((state) => state.rankTitleList);
  const setSeletRankTitle = useRankStore((state) => state.setSeletRankTitle);

  const filteredCharacters = filterCharacters(characters, selectedTitleList);

  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(
    setDropCharacterList,
    () => setSeletRankTitle(null)
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
    <TableBody className="text-xs">
      {filteredCharacters.slice(0, 8).map((c, i) => (
        <TableRow
          key={c?.name}
          onClick={() => {
            const name = c?.info?.find(
              (s) => s?.stat_name === '이름'
            )?.stat_value;
            selectedHandler(name?.toString() ?? '');
          }}
          draggable
          onDragStart={(e) => dragStart(e, i)}
          onDragEnd={dragEnd}
          onDragOver={dragOver}
          onDragEnter={() => dragEnter(i)}
          className={`h-12 border-b ${selectedCharacter?.name === c?.name ? 'text-blue-300' : ''} hover:cursor-pointer hover:bg-zinc-600`}
        >
          {/* 체크박스 */}
          <TableCell>
            <div onClick={(e) => onCheck(e, c?.name?.toString() ?? '')}>
              <Checkbox
                checked={checkedList.includes(c?.name?.toString() ?? '')}
              />
            </div>
          </TableCell>
          {c?.info?.map((i) => (
            <TableCell key={i?.stat_name + i?.stat_value}>
              <div className="flex flex-col items-center justify-center">
                <span>{i?.stat_value}</span>
                {selectedBoss && (
                  <LimitStat
                    characterName={c?.name?.toString() ?? ''}
                    selectedBoss={selectedBoss}
                    {...i}
                  />
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default LimitTableBody;
