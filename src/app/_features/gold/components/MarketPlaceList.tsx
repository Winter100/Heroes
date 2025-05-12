'use client';
import Loading from '@/app/_components/common/Loading';
import { useMarketRankList } from '../hooks/useMarketRankList';
import { MarketPlaceListProps } from '../types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { convertTradeType } from '../utils/convertTradeType';
import ErrorApi from '@/app/_components/common/error/ErrorApi';

const MarketPlaceList = ({ type = 'buy' }: MarketPlaceListProps) => {
  const { data, isLoading, error } = useMarketRankList(type);

  if (isLoading) return <Loading />;
  if (error) {
    return (
      <ErrorApi>
        <div>{`골드 ${convertTradeType(type)} 순위`}</div>
      </ErrorApi>
    );
  }

  if (!data) return null;

  const goldRankListData = 'buy_gold' in data ? data.buy_gold : data.sell_gold;

  return (
    <Table className="mx-auto max-w-md table-fixed caption-top border">
      <TableCaption>{`골드 ${convertTradeType(type)} 순위`}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16 text-center">순위</TableHead>
          <TableHead className="text-center">카르제</TableHead>
          <TableHead className="w-[30%] min-w-[100px] text-center">
            골드
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {goldRankListData?.map((rank, i) => (
          <TableRow key={rank.cairde_name}>
            <TableCell className="text-center">{i + 1}</TableCell>
            <TableCell>{rank.cairde_name}</TableCell>
            <TableCell>
              {'buy_gold' in rank
                ? `${rank?.buy_gold.toLocaleString()}`
                : `${rank?.sell_gold.toLocaleString()}`}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MarketPlaceList;
