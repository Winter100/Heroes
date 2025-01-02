"use client";

import Row from "../../layout/Row";
import UserSearch from "../../home/characterInfoPanel/UserSearch";
import { useName } from "@/app/_hooks/useName/useName";

const PreviewUserSearch = () => {
  const { inputRef, isFocused, onSubmitHandler, setIsFocused } = useName();
  return (
    <Row className="flex w-full items-center justify-center">
      <UserSearch
        className="w-full"
        inputRef={inputRef}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        onSubmitHandler={onSubmitHandler}
        loading={false}
      />
    </Row>
  );
};

export default PreviewUserSearch;
