import React from "react";
import PreviewSearchBar from "../preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar";
import { keyword } from "@/app/_constant/keyword";
import Column from "../layout/Column";

const HomeSearch = () => {
  return (
    <Column className="w-full items-center justify-center gap-10 pt-36">
      <h1 className="text-center font-sans text-7xl">{keyword.project.name}</h1>
      <PreviewSearchBar className="w-full max-w-80" />
    </Column>
  );
};

export default HomeSearch;
