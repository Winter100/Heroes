"use client";
import { useEffect } from "react";

import PreviewHeader from "./PreviewHeader";
import PreviewBody from "./PreviewBody";
import Column from "../layout/Column";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useRaidStore } from "@/app/_store/raidStore";
import { useSearchParams } from "next/navigation";

const Preview = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";

  const reset = usePreviewStore((state) => state.reset);
  const resetRaid = useRaidStore((state) => state.resetRaid);

  useEffect(() => {
    resetRaid();
    return () => {
      resetRaid();
    };
  }, [resetRaid]);

  useEffect(() => {
    reset();
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <>
      <Column className="h-full w-full gap-1 rounded-lg text-fontColor">
        {name && (
          <>
            <PreviewHeader />
            <PreviewBody />
          </>
        )}
      </Column>
    </>
  );
};

export default Preview;
