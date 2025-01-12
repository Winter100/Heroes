"use client";
import { useEffect } from "react";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useRaidStore } from "@/app/_store/raidStore";
import { useSearchParams } from "next/navigation";
import Column from "../../layout/Column";

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
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
    <Column className="h-full w-full gap-1 rounded-lg text-fontColor">
      {name && <>{children}</>}
    </Column>
  );
};

export default PreviewLayout;
