import { useSimulationStats } from '@/app/_hooks';
import PreviewStatsSummaryDialog from './preview-stats-summary-dialog';

/**
 * - 시뮬레이션으로 인해 변경된 스텟을 요약해 보여주는 컴포넌트
 */
const PreviewStatsSummaryContainer = ({ ocid }: { ocid: string }) => {
  const { beforeStats, diffStatsArray, finalStatsArray } =
    useSimulationStats(ocid);

  return (
    <PreviewStatsSummaryDialog
      beforeStats={beforeStats ?? []}
      diffStatsArray={diffStatsArray}
      finalStatsArray={finalStatsArray}
    />
  );
};

export default PreviewStatsSummaryContainer;
