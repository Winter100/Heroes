import { EnchantPriceProps } from "@/app/_type/enchantType";
import Loading from "../Loading";
import Row from "../../layout/Row";

const EnchantPrice = ({
  label = "평균 거래가 :",
  falseLabel = "최근 거래가 없습니다",
  avgPrice,
  enchantPriceLoading,
}: EnchantPriceProps) => {
  const renderContent = () => {
    if (enchantPriceLoading) return <Loading />;

    if (avgPrice !== 0) {
      return (
        <Row className="flex gap-1">
          <p className="hidden items-center justify-center sm:flex">{label}</p>
          <p className="items-center justify-center">
            {avgPrice?.toLocaleString()}
          </p>
        </Row>
      );
    }
    return <Row className="items-center justify-center">{falseLabel}</Row>;
  };

  return (
    <Row className="flex h-5 items-center justify-center gap-1 text-xs">
      {renderContent()}
    </Row>
  );
};

export default EnchantPrice;
