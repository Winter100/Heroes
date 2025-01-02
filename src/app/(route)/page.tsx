import { Suspense } from "react";
import Header from "../_components/layout/Header";
import Loading from "../_components/common/Loading";
import PreviewUserSearch from "../_components/preview/search/PreviewUserSearch";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      }
    >
      <div className="flex h-full w-full flex-col justify-center">
        <Header />
        <div className="m-auto my-40 flex w-96 cursor-default flex-col gap-4">
          <h1 className="text-center font-sans text-7xl">망디</h1>
          <div className="flex items-center justify-center text-xs">
            <p>마비노기 영웅전 캐릭터를 조회하고 장비를 세팅해보세요</p>
          </div>
          <div>
            <PreviewUserSearch />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
