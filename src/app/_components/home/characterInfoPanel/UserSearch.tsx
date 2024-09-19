"use client";

import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { GoSearch } from "react-icons/go";

import Row from "../../layout/Row";
import Input from "../../common/Input";
import Loading from "../../common/Loading";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useCharacter } from "@/app/_hooks/useCharacter/useCharacter";

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleCharacterInfo, loading } = useCharacter();
  const characters = useCharacterStore((state) => state.characters);

  const [isFocused, setIsFocused] = useState(false);

  const onClickHandler = async (e: FormEvent) => {
    e.preventDefault();
    const characterLength = characters.length;
    if (!characters || characterLength >= 8) {
      toast.error("캐릭터는 최대 8명까지 등록 가능합니다.");
      return;
    }
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      const resultArray = inputValue
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .filter(Boolean)
        .slice(0, 8 - characterLength);
      if (resultArray.length >= 1) {
        for (const item of resultArray) {
          await handleCharacterInfo(item);
        }
      } else {
        inputRef.current.focus();
        toast.error("캐릭터 이름을 입력해주세요.", {
          toastId: "characterName",
        });
      }
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  };

  return (
    <Row
      className={`${isFocused ? "border-blue-300" : ""} ${loading ? "bg-gray-200 opacity-60" : ""} outline-blue-300" h-8 w-60 gap-1 rounded-lg border-2 text-sm text-black shadow-sm`}
    >
      <form
        id="search"
        onSubmit={onClickHandler}
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
