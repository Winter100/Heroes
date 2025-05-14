import MarketPlaceList from './MarketPlaceList';

const GoldMarket = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-2 px-4 md:flex-row">
        <MarketPlaceList type="buy" />
        <MarketPlaceList type="sell" />
      </div>
      <div className="my-2 hidden text-center text-xs text-gray-400 lg:block">
        최근 1주 동안 골드 거래소에서 골드 구매 또는 판매량이 가장 많은 상위
        30명의 카르제를 조회합니다.
      </div>
    </>
  );
};

export default GoldMarket;
