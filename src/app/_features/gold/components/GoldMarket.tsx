import { MarketRankList } from '../types';
import MarketPlaceList from './MarketPlaceList';

type Props = {
  buyMarket: MarketRankList<'buy'>;
  sellMarket: MarketRankList<'sell'>;
};
const GoldMarket = ({ buyMarket, sellMarket }: Props) => {
  return (
    <>
      <h3 className="my-6 hidden text-center text-gray-400 lg:block">
        최근 1주 동안 골드 거래소에서 골드 구매 또는 판매량이 가장 많은 상위
        30명의 카르제를 조회합니다.
      </h3>
      <div className="flex h-full flex-col gap-2 px-4 md:flex-row">
        <MarketPlaceList data={buyMarket} type="buy" />
        <MarketPlaceList data={sellMarket} type="sell" />
      </div>
    </>
  );
};

export default GoldMarket;
