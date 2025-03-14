import Loading from "@/app/_components/common/Loading";
import HomeNotice from "@/app/_components/home/HomeNotice";
import HomeSearch from "@/app/_components/home/HomeSearch";
import ScreenContainer from "@/app/_components/layout/ScreenContainer";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ScreenContainer className="flex flex-col gap-10">
        <HomeSearch />
        <HomeNotice />
      </ScreenContainer>
    </Suspense>
  );
};

export default Home;
