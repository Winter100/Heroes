import BeforeAndAfter from "@/app/_components/common/beforeAndAfter/BeforeAndAfter";
import Row from "@/app/_components/layout/Row";
import { Skill } from "@/app/_type/characterType";

const DetailSkillItem = ({ skill }: { skill: Skill }) => {
  const skill_name = skill?.skill_name;
  const item_name = skill.item_name;
  return (
    <Row className="h-8 gap-2 p-2 font-normal">
      <BeforeAndAfter className="flex-1 items-center justify-center">
        <BeforeAndAfter.Title className="gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {skill_name}
        </BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title className="flex flex-row">
          {item_name}
        </BeforeAndAfter.Title>
      </BeforeAndAfter>
    </Row>
  );
};

export default DetailSkillItem;
