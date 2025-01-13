import Loading from "../common/Loading";
import Row from "../layout/Row";

interface EnchantPriceProps {
  isLoading: boolean;
  avgPrice: number;
}
const EnchantPrice = ({ avgPrice, isLoading }: EnchantPriceProps) => {
  const renderContent = () => {
    if (isLoading) return <Loading />;

    if (avgPrice !== 0) {
      return (
        <Row className="flex gap-1">
          <p className="hidden items-center justify-center sm:flex">
            평균 거래가 :
          </p>
          <p className="items-center justify-center">
            {avgPrice?.toLocaleString()}
          </p>
        </Row>
      );
    }
    return (
      <Row className="items-center justify-center">최근 거래가 없습니다</Row>
    );
  };

  return (
    <Row className="flex h-5 items-center justify-center gap-1 text-xs">
      {renderContent()}
    </Row>
  );
};

export default EnchantPrice;
