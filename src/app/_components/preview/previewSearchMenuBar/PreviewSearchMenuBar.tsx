import Row from "../../layout/Row";
import PreviewSearchBar from "./previewSearchBar/PreviewSearchBar";
import GrindingSummaryDialog from "./searchMenus/summary/GrindingSummaryDialog";
import PartholnSummaryDialog from "./searchMenus/summary/PartholnSummaryDialog";
import StatsSummaryDialog from "./searchMenus/summary/StatsSummaryDialog";
import TourSummaryDialog from "./searchMenus/summary/TourSummaryDialog";

const PreviewSearchMenuBar = () => {
  return (
    <Row className="flex h-8 w-full items-center justify-between gap-1">
      <Row className="h-full w-full items-center justify-center sm:flex-1">
        <PreviewSearchBar className="w-72" />
      </Row>
      <Row className="flex h-full w-60 items-center justify-center gap-1 text-xs">
        <TourSummaryDialog />
        <StatsSummaryDialog />
        <PartholnSummaryDialog />
        <GrindingSummaryDialog />
      </Row>
    </Row>
  );
};

export default PreviewSearchMenuBar;
