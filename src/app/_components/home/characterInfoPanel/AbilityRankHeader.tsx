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
    <Row className="grid grid-cols-3">
      <Row className="h-full w-12" />
      <Row className="flex items-center justify-center gap-1">
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
      <Row className="flex h-full justify-end gap-1">
        <RaidDropDownMenu />
        <StatDropDownMenu />
      </Row>
    </Row>
  );
};

export default AbilityRankHeader;
