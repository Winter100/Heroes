"use client";
import { useEffect } from "react";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useRaidStore } from "@/app/_store/raidStore";
import Column from "../../layout/Column";
import { useStats } from "@/app/_hooks/useStats/useStats";
import ErrorDisplay from "../../common/error/ErrorDisplay";

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

  if (!name) {
    return <ErrorDisplay content="캐릭터 이름을 입력해주세요." />;
  }
  return <Column className="relative flex flex-1">{name && children}</Column>;
};

export default PreviewLayout;
