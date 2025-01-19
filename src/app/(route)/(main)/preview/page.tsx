"use client";
import { Suspense } from "react";
import Loading from "@/app/_components/common/Loading";

import BasicContainer from "@/app/_components/layout/BasicContainer";
import PreviewLayout from "@/app/_components/preview/layout/PreviewLayout";
import PreviewBody from "@/app/_components/preview/content/PreviewBody";
import PreviewSearchBar from "@/app/_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BasicContainer className="flex items-center justify-center">
        <PreviewSearchBar className="mb-2 h-16 w-full" />
        <PreviewLayout>
          <PreviewBody />
        </PreviewLayout>
      </BasicContainer>
    </Suspense>
  );
};
export default Page;
