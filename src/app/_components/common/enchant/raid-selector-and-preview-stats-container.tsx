import RaidSelectorContainer from '../../selector/raid-selector-container';
import PreviewStatsContainer from '../../stats/preview-stats-container';

const RaidSelectorAndPreviewStatsContainer = ({ ocid }: { ocid: string }) => {
  return (
    <div className="flex flex-col rounded-md bg-background">
      <div className="mx-auto w-full max-w-72">
        <RaidSelectorContainer />
      </div>
      <PreviewStatsContainer ocid={ocid} />
    </div>
  );
};

export default RaidSelectorAndPreviewStatsContainer;
