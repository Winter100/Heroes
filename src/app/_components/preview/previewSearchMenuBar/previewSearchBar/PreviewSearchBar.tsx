"use client";

import Search from "@/app/_components/common/search/Search";
import { useRefFocus } from "@/app/_hooks/useRefFocus/useRefFocus";
import { useSearchHandler } from "@/app/_hooks/useSearchHandler/useSearchHandler";

const PreviewSearchBar = ({ className = "" }: { className?: string }) => {
  const { focus, inputRef } = useRefFocus();
  const { handleSearchSubmit } = useSearchHandler(inputRef, focus);
  return (
    <Search
      className={className}
      inputRef={inputRef}
      placeholder="캐릭터 이름을 입력해주세요."
      onSubmit={handleSearchSubmit}
    />
  );
};

export default PreviewSearchBar;
