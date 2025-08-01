'use client';

import Search from '@/app/_components/common/search/Search';
import { useRefFocus } from '@/app/_hooks/useRefFocus';
import { useSearchHandler } from '@/app/_hooks/useSearchHandler';

const CharacterSearchInput = ({
  className = '',
  routeName,
}: {
  className?: string;
  routeName?: string;
}) => {
  const { focus, inputRef } = useRefFocus();
  const { handleSearchSubmit } = useSearchHandler(inputRef, focus, routeName);
  return (
    <Search
      className={className}
      inputRef={inputRef}
      placeholder="캐릭터 이름을 입력해주세요."
      onSubmit={handleSearchSubmit}
    />
  );
};

export default CharacterSearchInput;
