"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import UserSkillAndEquipment from "@/app/_components/home/userDetailInfo/CharacterSkillAndEquipment";
import Column from "@/app/_components/layout/Column";
import Row from "@/app/_components/layout/Row";
import Button from "@/app/_components/common/Button";

const CharacterDetailInfo = () => {
  const [moreView, setMoreView] = useState(true);

  return (
    <Column className="h-full w-full">
      <Row className="my-1 items-center justify-center">
        <Button
          onClick={() => setMoreView((pre) => !pre)}
          className="flex h-full w-8 items-center justify-center"
        >
          {!moreView ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </Button>
      </Row>
      {moreView && (
        <Row className="h-full w-full flex-1 gap-1">
          <Column className="flex-1 cursor-default rounded-lg bg-zinc-800">
            <UserSkillAndEquipment />
          </Column>
        </Row>
      )}
    </Column>
  );
};

export default CharacterDetailInfo;
