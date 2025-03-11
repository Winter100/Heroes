"use client";

import { Stat } from "@/app/_type/previewType";
import { ComponentProps } from "react";

interface CharacterInfoBoxProps extends ComponentProps<"div"> {
  basic: Stat[];
}

const CharacterInfoBox = ({
  className = "",
  basic,
  ...props
}: CharacterInfoBoxProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center gap-4 ${className}`}
      {...props}
    >
      {/* <div className="m-auto h-full rounded-lg">캐릭터 이미지</div> */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-1">
        {basic?.map((item) => (
          <div
            key={item.stat_name}
            className="flex w-full items-center justify-center gap-2"
          >
            <p className="flex flex-1 items-center justify-center">
              {item.stat_name}
            </p>
            <p className="flex flex-1 items-center justify-center">
              {item.stat_value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterInfoBox;
