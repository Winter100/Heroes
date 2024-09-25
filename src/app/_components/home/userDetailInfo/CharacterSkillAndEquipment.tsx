import Row from "../../layout/Row";
import Column from "../../layout/Column";
import { useDetailStore } from "@/app/_store/DetailStore";
import ItemEquipment from "../characterInfoPanel/detail/ItemEquipment";
import Skill from "../characterInfoPanel/detail/Skill";
import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import DetailMenu from "../characterInfoPanel/menuList/DetailMenu";
import UserDetailInfo from "@/app/_components/home/userDetailInfo/CharacterDetailItem";
import { useCharacterStore } from "@/app/_store/characterStore";

const CharacterSkillAndEquipment = () => {
  const stats = useDetailStore((state) => state.stats);
  const item = useDetailStore((state) => state.item);

  const name =
    useCharacterStore((state) => state.selectedCharacter?.name) ?? "";

  const { bag, cash, isLoading } = useEquipment(name ?? "");

  return (
    <Column className="h-full w-full gap-1 p-1 text-xs">
      <DetailMenu />
      <Row className="flex h-full w-full">
        <div>{stats && <UserDetailInfo />}</div>
        <div className="flex-1">
          {item === "skill" && <Skill />}
          {item === "item" && (
            <ItemEquipment isLoading={isLoading} items={bag} />
          )}
          {item === "cash" && (
            <ItemEquipment isLoading={isLoading} items={cash} />
          )}
        </div>
      </Row>
    </Column>
  );
};

export default CharacterSkillAndEquipment;
