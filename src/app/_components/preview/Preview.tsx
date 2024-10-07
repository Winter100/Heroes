"use client";
import { useEffect } from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewBody from "./PreviewBody";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Table from "./table/Table";
import { usePreviewStore } from "@/app/_store/previewStore";

const Preview = ({ name }: { name: string }) => {
  const reset = usePreviewStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, []);

  return (
    <>
      <Column className="h-full w-full gap-1 rounded-lg">
        <Row className="h-full w-full gap-1">
          <Column className="h-full w-full gap-1 text-xs">
            {name && (
              <>
                <PreviewHeader />
                <PreviewBody name={name} />
                <Row className="h-20 rounded-lg border border-borderColor p-2 text-white">
                  <Table />
                </Row>
              </>
            )}
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default Preview;
