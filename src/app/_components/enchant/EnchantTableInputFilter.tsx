import { FormEvent } from "react";
import Row from "../layout/Row";
import Button from "../common/Button";
import EnchantDropListFilterDialog from "../dialog/EnchantDropListFilterDialog";
import { useSelectEnchantStore } from "@/app/_store/selectEnchantStore";
import { GrRefresh } from "react-icons/gr";
import { useRefFocus } from "@/app/_hooks/useRefFocus/useRefFocus";
import Search from "../common/search/Search";
import { useEnchantFilterStore } from "@/app/_store/enchantFilterStore";

const EnchantTableInputFilter = () => {
  const { inputRef, resetRef } = useRefFocus();
  const resetSelectEnchant = useSelectEnchantStore(
    (state) => state.resetSelectEnchant,
  );

  const { setEnchantFilterName, resetEnchantFilter } = useEnchantFilterStore(
    (state) => ({
      setEnchantFilterName: state.setEnchantFilterName,
      resetEnchantFilter: state.resetEnchantFilter,
    }),
  );

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchValue = inputRef.current?.value;
    if (searchValue) {
      resetSelectEnchant();
      setEnchantFilterName(searchValue);
    }
  };

  const onReset = () => {
    // 선택 인챈트 아이템 초기화
    resetSelectEnchant();
    // input Ref값 초기화
    resetRef();
    // Zustand에 설정된 인챈트 필터값 초기화
    resetEnchantFilter();
  };

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
