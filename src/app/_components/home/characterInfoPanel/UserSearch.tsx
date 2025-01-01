"use client";
import { FormEvent } from "react";
import { Dispatch, RefObject, SetStateAction } from "react";
import { GoSearch } from "react-icons/go";

import Row from "../../layout/Row";
import Input from "../../common/Input";
import Loading from "../../common/Loading";
import { useSearchParams } from "next/navigation";

interface UserSearchProps {
  inputRef: RefObject<HTMLInputElement>;
  isFocused: boolean;
  loading: boolean;
  onSubmitHandler: (e: FormEvent) => Promise<void>;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const UserSearch = ({
  inputRef,
  isFocused,
  loading,
  onSubmitHandler,
  setIsFocused,
  className = "",
}: UserSearchProps) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";

  const onSubmit = (e: FormEvent) => {
    if (inputRef.current?.value === name) {
      e.preventDefault();
      inputRef.current.focus();
      return;
    } else {
      onSubmitHandler(e);
    }
  };
  return (
    <Row
      className={`${isFocused ? "border-blue-300" : "border-borderColor"} ${loading ? "bg-backgroundTwo" : ""} h-8 gap-1 rounded-lg border text-sm shadow-sm outline-blue-300 ${className}`}
    >
      <form id="search" onSubmit={onSubmit} className="flex h-full w-full pl-2">
        <Input
          spellCheck="false"
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-full w-full flex-1 border-none bg-inherit text-[10px] outline-none md:text-xs"
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
