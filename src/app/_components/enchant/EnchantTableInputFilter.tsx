import Row from "../layout/Row";
import Button from "../common/Button";
import EnchantDropListFilterDialog from "../dialog/EnchantDropListFilterDialog";
import { GrRefresh } from "react-icons/gr";
import Search from "../common/search/Search";
import { useEnchantTableInputFilter } from "./hooks/useEnchantTableInputFilter";

const EnchantTableInputFilter = () => {
  const { inputRef, onSearch, onReset } = useEnchantTableInputFilter();

  return (
    <Row className="mt-2 flex h-8 items-center justify-center gap-1 rounded-md text-xs text-white">
      <Search
        maxLength={10}
        className="w-full px-2"
        onSubmit={onSearch}
        inputRef={inputRef}
        placeholder="인챈트를 입력해주세요."
      />
      <div className="flex h-full w-12 items-center justify-center sm:w-20">
        <Button onClick={onReset} className="rounded-md text-lg">
          <GrRefresh />
        </Button>
      </div>
      <div className="h-full w-12 text-xl sm:w-20">
        <EnchantDropListFilterDialog />
      </div>
    </Row>
  );
};

export default EnchantTableInputFilter;
