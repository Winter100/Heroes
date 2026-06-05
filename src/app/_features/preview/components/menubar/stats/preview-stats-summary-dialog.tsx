import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Column from '@/app/_components/layout/Column';
import Row from '@/app/_components/layout/Row';
import { ArrowRight } from 'lucide-react';
import PreviewStatsBox from './preview-stats-box';
import { Stat } from '@/app/_type/previewType';

interface Props {
  beforeStats: Stat[];
  finalStatsArray: Stat[];
  diffStatsArray: Stat[];
}

const PreviewStatsSummaryDialog = ({
  beforeStats,
  diffStatsArray,
  finalStatsArray,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          스텟
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 overflow-y-auto border-none bg-background text-white sm:max-h-[950px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Column className="dark h-full w-full gap-1 text-xs">
          <Row className="items-center justify-center gap-1 sm:gap-2">
            <Column className="gap-1">
              <p className="text-center">기존</p>
              <PreviewStatsBox
                className="max-w-42 h-96 rounded-lg border border-gray-600 bg-background p-2 text-white"
                stats={beforeStats ?? []}
              />
            </Column>
            <div className="hidden items-center justify-center text-2xl sm:flex">
              <ArrowRight />
            </div>

            <Column className="gap-1">
              <p className="text-center">변경</p>
              <PreviewStatsBox
                isTitle={true}
                className="max-w-42 h-96 rounded-lg border border-gray-600 bg-background p-2 text-white"
                stats={finalStatsArray ?? []}
                simulationsStats={diffStatsArray ?? []}
              />
            </Column>
          </Row>
        </Column>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewStatsSummaryDialog;
