"use client";
import Row from "../../layout/Row";
import UserSearch from "./UserSearch";
import ResetBtn from "./menuList/ResetBtn";
import RaidDropDownMenu from "./menuList/RaidDropDownMenu";
import StatDropDownMenu from "./menuList/StatDropDownMenu";
import ImageSearch from "./menuList/ImageSearch";
import { useNameSearch } from "@/app/_hooks/useNameSearch/useNameSearch";

const AbilityRankHeader = () => {
  const { inputRef, isFocused, loading, onSubmitHandler, setIsFocused } =
    useNameSearch();

  return (
    <Row className="flex h-10 flex-row items-center gap-1 py-1 md:grid md:grid-cols-3">
      <Row className="flex h-full items-center justify-center gap-1">
        <RaidDropDownMenu />
        <StatDropDownMenu />
      </Row>
      <Row className="flex h-full w-full items-center justify-center gap-1">
        <ImageSearch />
        <UserSearch
          inputRef={inputRef}
          isFocused={isFocused}
          loading={loading}
          onSubmitHandler={onSubmitHandler}
          setIsFocused={setIsFocused}
        />
        <ResetBtn />
      </Row>
      <Row className="h-full w-12 md:hidden" />
    </Row>
  );
};

export default AbilityRankHeader;
