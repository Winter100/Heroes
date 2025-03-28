import CraftingFilter from "@/app/_components/iteminfo/crafting/CraftingFilter";
import CraftingList from "@/app/_components/iteminfo/crafting/CraftingList";
import MaterialsCrafting from "@/app/_components/iteminfo/crafting/MaterialsCrafting";
import BasicContainer from "@/app/_components/layout/BasicContainer";

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-1 px-4 sm:mt-20 sm:p-2">
      <h1 className="text-sm">아이템 제작 정보</h1>
      <CraftingFilter />
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <div className="flex h-96 w-full flex-row gap-1 sm:h-[700px] sm:w-72">
          <BasicContainer className="w-full overflow-y-auto border border-borderColor/50">
            <CraftingList />
          </BasicContainer>
        </div>
        <div className="flex h-96 w-full flex-1 flex-row gap-1 sm:h-[700px]">
          <BasicContainer className="flex w-full flex-1 justify-center border border-borderColor/50">
            <MaterialsCrafting />
          </BasicContainer>
        </div>
      </div>
    </div>
  );
};

export default Page;
