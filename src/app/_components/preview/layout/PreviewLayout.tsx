"use client";
import { useEffect } from "react";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useRaidStore } from "@/app/_store/raidStore";
import Column from "../../layout/Column";
import { useStats } from "@/app/_hooks/useStats/useStats";

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  const { name } = useStats();

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
    <Column className="relative h-full w-full gap-1 rounded-lg text-fontColor">
      {name && children}
    </Column>
  );
};

export default PreviewLayout;
