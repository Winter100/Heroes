import BeforeAndAfter from '@/app/_components/common/beforeAndAfter/BeforeAndAfter';
import Row from '@/app/_components/layout/Row';

const PreviewTitle = () => {
  return (
    <Row className="mt-1 h-12 gap-2 border-b border-borderColor">
      <BeforeAndAfter className="w-12 justify-start sm:justify-center">
        <BeforeAndAfter.Title className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
          아이템
        </BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter className="w-5">
        <BeforeAndAfter.Title className=""></BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title>정령합성</BeforeAndAfter.Title>
        <BeforeAndAfter.Content className="flex-col sm:flex-row">
          <BeforeAndAfter.Before className="flex items-center justify-center">
            기존
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title>접두</BeforeAndAfter.Title>
        <BeforeAndAfter.Content className="flex-col sm:flex-row">
          <BeforeAndAfter.Before className="flex items-center justify-center">
            기존
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title>접미</BeforeAndAfter.Title>
        <BeforeAndAfter.Content className="flex-col sm:flex-row">
          <BeforeAndAfter.Before className="flex items-center justify-center">
            기존
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
    </Row>
  );
};

export default PreviewTitle;
