"use client";
import { FormEvent } from "react";
import { Dispatch, RefObject, SetStateAction } from "react";
import { GoSearch } from "react-icons/go";

import Row from "../../layout/Row";
import Input from "../../common/Input";
import Loading from "../../common/Loading";

interface UserSearchProps {
  inputRef: RefObject<HTMLInputElement>;
  isFocused: boolean;
  loading: boolean;
  onSubmitHandler: (e: FormEvent) => Promise<void>;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}

const UserSearch = ({
  inputRef,
  isFocused,
  loading,
  onSubmitHandler,
  setIsFocused,
}: UserSearchProps) => {
  return (
    <Row
      className={`${isFocused ? "border-blue-300" : ""} ${loading ? "bg-gray-200 opacity-60" : ""} outline-blue-300" h-8 w-60 gap-1 rounded-lg border-2 text-sm text-black shadow-sm`}
    >
      <form
        id="search"
        onSubmit={onSubmitHandler}
        className="flex h-full w-full pl-2"
      >
        <Input
          spellCheck="false"
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-full w-full flex-1 border-none bg-inherit text-xs outline-none"
          placeholder="캐릭터 이름을 입력해주세요."
          disabled={loading}
        />
        <button
          disabled={loading}
          type="submit"
          className={`flex h-full w-6 items-center justify-center`}
        >
          {!loading ? <GoSearch /> : <Loading />}
        </button>
      </form>
    </Row>
  );
};

export default UserSearch;
