import { Suspense } from "react";
import Loading from "@/app/_components/common/Loading";

import BasicContainer from "@/app/_components/layout/BasicContainer";
import PreviewLayout from "@/app/_components/preview/layout/PreviewLayout";
import PreviewBody from "@/app/_components/preview/content/PreviewBody";
import PreviewSearchBar from "@/app/_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar";
import Row from "@/app/_components/layout/Row";
import TourSummaryDialog from "@/app/_components/preview/previewSearchMenuBar/searchMenus/summary/TourSummaryDialog";
import StatsSummaryDialog from "@/app/_components/preview/previewSearchMenuBar/searchMenus/summary/StatsSummaryDialog";
import PartholnSummaryDialog from "@/app/_components/preview/previewSearchMenuBar/searchMenus/summary/PartholnSummaryDialog";
import GrindingSummaryDialog from "@/app/_components/preview/previewSearchMenuBar/searchMenus/summary/GrindingSummaryDialog";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BasicContainer>
        <Row className="items-center justify-center">
          <PreviewSearchBar className="h-16 w-80" />
          <TourSummaryDialog />
          <StatsSummaryDialog />
          <PartholnSummaryDialog />
          <GrindingSummaryDialog />
        </Row>
        <PreviewLayout>
          <PreviewBody />
        </PreviewLayout>
      </BasicContainer>
    </Suspense>
  );
};
export default Page;
// import { Suspense } from "react";
// import Section from "@/app/_components/layout/Section";
// import Preview from "@/app/_components/preview/Preview";
// import Loading from "@/app/_components/common/Loading";
// import PreviewTop from "@/app/_components/preview/PreviewTop";

// const Page = () => {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex h-full w-full items-center justify-center">
//           <Loading />
//         </div>
//       }
//     >
//       <Section>
//         <PreviewTop />
//         <Preview />
//       </Section>
//     </Suspense>
//   );
// };

// export default Page;
