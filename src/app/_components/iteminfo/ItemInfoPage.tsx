import BasicContainer from "../layout/BasicContainer";
import CraftingList from "./crafting/CraftingList";
import MaterialsCrafting from "./MaterialsCrafting";
import CraftingFilter from "./crafting/CraftingFilter";

const ItemInfoPage = () => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-1 px-4 sm:mt-20 sm:px-0">
      <h1 className="text-sm">아이템 제작 정보</h1>
      <CraftingFilter />
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        {/* <div className="flex h-96 w-full flex-row gap-1 sm:min-h-[600px] sm:w-72"> */}
        <div className="flex h-96 w-full flex-row gap-1 sm:h-[600px] sm:w-72">
          <BasicContainer className="w-full overflow-y-auto border border-borderColor/50">
            <CraftingList />
          </BasicContainer>
        </div>
        {/* <div className="flex h-96 flex-1 flex-row gap-1 sm:min-h-[600px]"> */}
        <div className="flex h-96 flex-1 flex-row gap-1 sm:h-[600px]">
          <BasicContainer className="flex w-full justify-center border border-borderColor/50">
            <MaterialsCrafting />
          </BasicContainer>
        </div>
      </div>
    </div>
  );
};

export default ItemInfoPage;
