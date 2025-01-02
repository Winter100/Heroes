import { Suspense } from "react";
import Section from "@/app/_components/layout/Section";
import Preview from "@/app/_components/preview/Preview";
import Loading from "@/app/_components/common/Loading";
import PreviewTop from "@/app/_components/preview/PreviewTop";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      }
    >
      <Section>
        <PreviewTop />
        <Preview />
      </Section>
    </Suspense>
  );
};

export default Page;
