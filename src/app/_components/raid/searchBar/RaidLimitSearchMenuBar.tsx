"use client";
import Row from "@/app/_components/layout/Row";
import RaidSelecterModal from "@/app/_components/preview/menu/RaidSelecterModal";
import { useRaidLimitNameSearch } from "@/app/_hooks/useRaidLimitNameSearch/useRaidLimitNameSearch";
import StatFilterDropDown from "../menuList/StatFilterDropDown";
import ImageSearch from "../menuList/ImageSearch";
import Search from "@/app/_components/common/search/Search";
import ResetBtn from "../menuList/ResetBtn";

const RaidLimitSearchMenuBar = () => {
  const { inputRef, loading, onSubmitHandler } = useRaidLimitNameSearch();

  return (
    <Row className="flex h-8 flex-row items-center gap-1 md:grid md:grid-cols-3">
      <Row className="flex h-full items-center justify-center gap-2">
        <div className="flex h-full w-28 items-center justify-center rounded-lg border border-borderColor transition ease-in-out hover:border-blue-300 sm:w-44">
          <RaidSelecterModal isAllBtn={false} />
        </div>
        <div className="h-full w-12 sm:w-20">
          <StatFilterDropDown />
        </div>
      </Row>
      <Row className="flex h-full w-full items-center justify-center gap-1">
        <ImageSearch />
        <Search
          className="w-full max-w-72"
          placeholder="캐릭터 이름을 입력해주세요."
          inputRef={inputRef}
          loading={loading}
          onSubmit={onSubmitHandler}
        />
        <ResetBtn />
      </Row>
    </Row>
  );
};

export default RaidLimitSearchMenuBar;
// "use client";
// import Row from "../../layout/Row";
// import UserSearch from "./UserSearch";
// import ResetBtn from "./menuList/ResetBtn";
// import StatDropDownMenu from "./menuList/StatDropDownMenu";
// import ImageSearch from "./menuList/ImageSearch";
// import { useNameSearch } from "@/app/_hooks/useNameSearch/useNameSearch";
// import RaidSelecterModal from "../../preview/menu/RaidSelecterModal";

// const AbilityRankHeader = () => {
//   const { inputRef, isFocused, loading, onSubmitHandler, setIsFocused } =
//     useNameSearch();

//   return (
//     <Row className="flex h-10 flex-row items-center gap-1 py-1 md:grid md:grid-cols-3">
//       <Row className="flex h-full items-center justify-center gap-2">
//         <div className="flex h-full w-44 items-center justify-center rounded-lg border border-borderColor transition ease-in-out hover:border-blue-300">
//           <RaidSelecterModal isAllBtn={false} />
//         </div>
//         <StatDropDownMenu />
//       </Row>
//       <Row className="flex h-full w-full items-center justify-center gap-1">
//         <ImageSearch />
//         <UserSearch
//           inputRef={inputRef}
//           isFocused={isFocused}
//           loading={loading}
//           onSubmitHandler={onSubmitHandler}
//           setIsFocused={setIsFocused}
//         />
//         <ResetBtn />
//       </Row>
//     </Row>
//   );
// };

// export default AbilityRankHeader;
