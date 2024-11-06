import { Suspense } from "react";
import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import Row from "@/app/_components/layout/Row";

import PreviewUserSearch from "@/app/_components/home/userDetailInfo/PreviewUserSearch";
import Preview from "@/app/_components/preview/Preview";
import ResultModal from "@/app/_components/preview/menu/ResultModal";
import RaidLimitModal from "@/app/_components/preview/menu/RaidLimitModal";
import GrindingResultModal from "@/app/_components/preview/menu/GrindingResultModal";
import Loading from "@/app/_components/common/Loading";
import Partholn from "@/app/_components/preview/menu/Partholn";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      }
    >
      <Section className="h-full w-full">
        <Column className="flex h-full w-full gap-1">
          <Row className="h-8 w-full items-center justify-between gap-1">
            <Row className="h-full w-full items-center justify-center sm:flex-1">
              <PreviewUserSearch />
            </Row>
            <Row className="flex h-full w-60 items-center justify-center gap-1">
              <RaidLimitModal />
              <ResultModal />
              <Partholn />
              <GrindingResultModal />
            </Row>
          </Row>
          <Preview />
        </Column>
      </Section>
    </Suspense>
  );
};

export default Page;
