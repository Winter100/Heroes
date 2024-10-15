"use client";

import UserSkillAndEquipment from "@/app/_components/home/userDetailInfo/CharacterSkillAndEquipment";
import Column from "@/app/_components/layout/Column";

const CharacterDetailInfo = () => {
  return (
    <Column className="">
      <UserSkillAndEquipment />
    </Column>
  );
};

export default CharacterDetailInfo;
// "use client";

// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

// import UserSkillAndEquipment from "@/app/_components/home/userDetailInfo/CharacterSkillAndEquipment";
// import Column from "@/app/_components/layout/Column";
// import Row from "@/app/_components/layout/Row";
// import Button from "@/app/_components/common/Button";

// const CharacterDetailInfo = () => {
//   const [moreView, setMoreView] = useState(false);

//   return (
//     <Column className="h-full w-full p-2">
//       <Row className="my-1 h-5 items-center justify-center">
//         <Button
//           onClick={() => setMoreView((pre) => !pre)}
//           className="flex h-full w-8 items-center justify-center"
//         >
//           {!moreView ? <IoIosArrowDown /> : <IoIosArrowUp />}
//         </Button>
//       </Row>
//       {moreView && <UserSkillAndEquipment />}
//     </Column>
//   );
// };

// export default CharacterDetailInfo;
