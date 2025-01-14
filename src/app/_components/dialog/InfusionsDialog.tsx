import { InfusionsDialogProps } from "@/app/_type/infusionType";
import BasicDialog from "../common/BasicDialog";
import Row from "../layout/Row";
import BottomArrow from "../common/BottomArrow";
import ItemTitle from "../common/ItemTitle";
import InfusionsContent from "./content/InfusionsContent";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";

const InfusionsDialog = ({
  selectedValue,
  items,
  infusionList,
  label,
  selectedHandler,
}: InfusionsDialogProps) => {
  const { level, name } = items;
  return (
    <BasicDialog
      label={
        <Row className="items-center justify-center">
          {label}
          <BottomArrow />
        </Row>
      }
      size="750px"
    >
      <ItemTitle level={level} name={name} />
      <InfusionsContent
        infusionList={infusionList}
        selectedHandler={selectedHandler}
        selectedValue={selectedValue}
      />
      <RaidSelectorWithStats />
    </BasicDialog>
  );
};

export default InfusionsDialog;
