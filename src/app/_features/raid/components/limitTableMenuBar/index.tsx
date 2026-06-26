'use client';
import Row from '@/app/_components/layout/Row';
import Search from '@/app/_components/common/search/Search';
import ResetBtn from './ResetBtn';
import StatFilterDropDown from './filter';
import ImageSearch from './imageSearch';
import Column from '@/app/_components/layout/Column';
import RaidSelectorContainer from '@/app/_components/selector/raid-selector-container';
import { useRaidLimitNameSearch } from '@/app/_hooks';

const LimitTableMenuBar = () => {
  const { inputRef, loading, onSubmitHandler } = useRaidLimitNameSearch();

  return (
    <Column className="gap-2">
      <Row className="items-center justify-end gap-1">
        <div className="w-52">
          <RaidSelectorContainer />
        </div>
        <div className="w-20">
          <StatFilterDropDown />
        </div>
      </Row>
      <Row className="items-center justify-center gap-1">
        <ImageSearch />
        <Search
          className="h-8 w-72"
          placeholder="캐릭터 이름을 입력해주세요."
          inputRef={inputRef}
          loading={loading}
          onSubmit={onSubmitHandler}
        />
        <ResetBtn />
      </Row>
    </Column>
  );
};

export default LimitTableMenuBar;
