import { Suspense } from "react";
import Loading from "@/app/_components/common/Loading";
import HomeEventNotice from "@/app/_components/home/HomeEventNotice";
import HomeNotice from "@/app/_components/home/HomeNotice";
import RoundedContainer from "@/app/_components/layout/RoundedContainer";
import EventCalendar from "@/app/_components/home/EventCalendar";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="dark flex flex-1 flex-col gap-2 p-2">
        <RoundedContainer className="flex h-60 w-full items-center justify-center bg-muted/50"></RoundedContainer>
        <HomeNotice />
        <div className="flex flex-1 gap-2">
          <RoundedContainer className="flex flex-1 flex-col bg-muted/50">
            <div className="w-full text-center text-sm">이벤트</div>
            <div className="flex h-full flex-col md:flex-row">
              <EventCalendar />
              <HomeEventNotice />
            </div>
          </RoundedContainer>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
