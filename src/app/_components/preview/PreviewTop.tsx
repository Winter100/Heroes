import Row from "../layout/Row";
import GrindingResultModal from "./menu/GrindingResultModal";
import Partholn from "./menu/Partholn";
import RaidLimitModal from "./menu/RaidLimitModal";
import ResultModal from "./menu/ResultModal";
import PreviewUserSearch from "./search/PreviewUserSearch";

const PreviewTop = () => {
  return (
    <Row className="flex h-8 w-full items-center justify-between gap-1">
      <Row className="h-full w-full items-center justify-center sm:flex-1">
        <PreviewUserSearch />
      </Row>
      <Row className="flex h-full w-60 items-center justify-center gap-1">
        <RaidLimitModal />
        <ResultModal />
        <Partholn />
        <GrindingResultModal />
      </Row>
    </Row>
  );
};

export default PreviewTop;
