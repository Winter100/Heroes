import Column from "../layout/Column";
import MarketPlaceList from "./marketplace/MarketPlaceList";

const MarketRanking = () => {
  return (
    <Column className="h-full w-full gap-3">
      <Column className="flex h-full w-full flex-row gap-10 lg:flex-row">
        <Column className="h-full w-full flex-1">
          <p className="my-4 text-center text-sm">골드 구매</p>
          <MarketPlaceList type="buy" />
        </Column>
        <Column className="h-full w-full flex-1">
          <p className="my-4 text-center text-sm">골드 판매</p>
          <MarketPlaceList type="sell" />
        </Column>
      </Column>

      <div className="m-auto my-2 hidden text-[13px] text-white lg:flex lg:gap-1">
        최근 1주 동안 골드 거래소에서 골드 구매 또는 판매량이 가장 많은 상위
        30명의 카르제를 조회합니다.
      </div>
    </Column>
  );
};

export default MarketRanking;
