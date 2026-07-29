import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Column from '@/app/_components/layout/Column';
import RaidFilterBtnContainer from '@/app/_components/selector/raid-filter-btn-container';
import { Button } from '@/components/ui/button';
import { RaidType } from '@/app/_store/useRaidStore';
import { Stat } from '@/app/_type/previewType';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import PreviewStatsTableHead from '@/app/_components/stats/preview-stats-table-head';
import PreviewStatsTableCell from '@/app/_components/stats/preview-stats-table-cell';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { RaidListType } from '@/app/_type/raidType';

interface Props {
  raidList: RaidListType[];
  type: RaidType;
  userStats: Stat[];
  onClick: (type: RaidType) => void;
  statNameList: { stat_name: string }[];
}
const TourRaidTableDialog = ({
  raidList,
  type,
  userStats,
  statNameList,
  onClick,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          순회
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-5xl overflow-y-auto border-none bg-zinc-900 px-1 text-white sm:max-h-[650px] sm:px-6 md:max-h-[950px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Column className="dark h-full w-full gap-4">
          {/* 빠른전투 및 상한 선택 버튼 */}
          <RaidFilterBtnContainer type={type} onClick={onClick} />
          {raidList.map((raids) => {
            return (
              <Column key={raids.raid_name}>
                {/* 순회명 */}
                <h3 className="mx-auto p-1">{raids.raid_name}</h3>
                <Table className="table-fixed caption-top">
                  <TableCaption className="hidden"></TableCaption>
                  {/* 미리보기 스텟 이름 */}
                  <TableHeader>
                    {/* 헤더 아이콘의 빈 공간 및 스텟 리스트 */}
                    <TableHead className="w-4 text-center"></TableHead>
                    <PreviewStatsTableHead statsNameList={statNameList} />
                  </TableHeader>
                  {/* 몬스터별 시뮬레이션 스텟 */}
                  <TableBody className="bg-black/50">
                    {raids.monsters.map((raid) => {
                      return (
                        <TableRow className="text-center" key={raid.battle}>
                          {/* 이미지 전용 셀 생성 */}
                          <TableCell title={raid.battle}>
                            <ImageIcon
                              className="h-4 w-4 object-contain"
                              src={raid?.image ?? ''}
                              alt="R"
                            />
                          </TableCell>

                          {/* 스텟 데이터 로우 */}
                          <PreviewStatsTableCell
                            raid={raid}
                            raidType={type}
                            simulationStats={userStats}
                          />
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Column>
            );
          })}
        </Column>
      </DialogContent>
    </Dialog>
  );
};

export default TourRaidTableDialog;
