"use client";

import { useCharacterStore } from "@/app/_store/characterStore";
import { ComponentProps } from "react";

interface CharacterInfoBoxProps extends ComponentProps<"div"> {}

const CharacterInfoBox = ({
  className = "",
  ...props
}: CharacterInfoBoxProps) => {
  const basic = useCharacterStore((state) => state.selectedCharacter?.basic);
  return (
    <div
      className={`flex items-center justify-center gap-4 text-white ${className}`}
      {...props}
    >
      {/* <div className="m-auto h-full rounded-lg">캐릭터 이미지</div> */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-1">
        {basic?.map((item) => (
          <div
            key={item.stat_name}
            className="flex w-full items-center justify-center gap-2"
          >
            <p className="flex min-w-32 items-center justify-center">
              {item.stat_name}
            </p>
            <p className="flex w-full flex-1 items-center justify-center">
              {item.stat_value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterInfoBox;
