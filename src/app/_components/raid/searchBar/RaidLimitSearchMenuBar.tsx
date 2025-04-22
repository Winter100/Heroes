'use client';
import Row from '@/app/_components/layout/Row';
import RaidSelecterModal from '@/app/_components/preview/menu/RaidSelecterModal';
import { useRaidLimitNameSearch } from '@/app/_hooks/useRaidLimitNameSearch/useRaidLimitNameSearch';
import StatFilterDropDown from '../menuList/StatFilterDropDown';
import ImageSearch from '../menuList/ImageSearch';
import Search from '@/app/_components/common/search/Search';
import ResetBtn from '../menuList/ResetBtn';

const RaidLimitSearchMenuBar = () => {
  const { inputRef, loading, onSubmitHandler } = useRaidLimitNameSearch();

  return (
    <Row className="flex h-8 flex-row items-center gap-1 md:grid md:grid-cols-3">
      <Row className="flex h-full items-center justify-center gap-2">
        <div className="flex h-full w-28 items-center justify-center rounded-md border border-borderColor transition ease-in-out hover:border-blue-300 sm:w-44">
          <RaidSelecterModal isAllBtn={false} />
        </div>
        <div className="h-full w-12 sm:w-20">
          <StatFilterDropDown />
        </div>
      </Row>
      <Row className="flex h-full w-full items-center justify-center gap-1">
        <ImageSearch />
        <Search
          className="flex-1"
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
