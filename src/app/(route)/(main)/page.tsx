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
        <div
          className="relative h-60 w-full rounded-md bg-cover"
          style={{
            backgroundImage: "url(/art.jpg)",
            backgroundPosition: "center 12%",
          }}
        />
        <HomeNotice />
        <div className="flex flex-1">
          <div className="flex h-full w-full flex-col gap-2 lg:flex-row">
            <div className="flex flex-1 flex-col bg-muted/50">
              <HomeEventNotice />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <RoundedContainer className="flex flex-1 bg-muted/50">
                <EventCalendar />
              </RoundedContainer>
              {/* <div className="flex flex-1"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
