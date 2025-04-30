import BasicContainer from '@/app/_components/layout/BasicContainer';
import {
  CraftingFilterBtnList,
  CraftingItemList,
  MaterialsCrafting,
} from '@/app/_features/iteminfo';

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-1 px-4 sm:mt-20 sm:p-2">
      <h1 className="text-sm">아이템 제작 정보</h1>
      <CraftingFilterBtnList />
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <div className="flex h-96 w-full flex-row gap-1 sm:h-[700px] sm:w-72">
          <BasicContainer className="w-full overflow-y-auto border border-borderColor/50">
            <CraftingItemList />
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
