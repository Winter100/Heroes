import BeforeAndAfter from "@/app/_components/common/beforeAndAfter/BeforeAndAfter";
import Row from "@/app/_components/layout/Row";

const DetailHeader = () => {
  return (
    <Row className="mt-1 h-12 gap-2 border-b border-borderColor p-2">
      <BeforeAndAfter className="flex-1 items-center justify-center">
        <BeforeAndAfter.Title className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
          아이템
        </BeforeAndAfter.Title>
      </BeforeAndAfter>
    </Row>
  );
};

export default DetailHeader;
