"use client";

import { useName } from "@/app/_hooks/useName/useName";
import UserSearch from "../characterInfoPanel/UserSearch";

const PreviewUserSearch = () => {
  const { inputRef, isFocused, onSubmitHandler, setIsFocused } = useName();
  return (
    <UserSearch
      inputRef={inputRef}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      onSubmitHandler={onSubmitHandler}
      loading={false}
    />
  );
};

export default PreviewUserSearch;
