import BeforeAndAfter from "../common/beforeAndAfter/BeforeAndAfter";
import Row from "../layout/Row";

const PreviewHeader = () => {
  return (
    <Row className="h-12 gap-2 rounded-lg bg-zinc-800 p-2 text-white">
      <BeforeAndAfter>
        <BeforeAndAfter.Title className="font-semibold">
          아이템
        </BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter>
        <BeforeAndAfter.Title className="font-semibold">
          정령합성
        </BeforeAndAfter.Title>
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>기존</BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter>
        <BeforeAndAfter.Title className="font-semibold">
          접두
        </BeforeAndAfter.Title>
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>기존</BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter>
        <BeforeAndAfter.Title className="font-semibold">
          접미
        </BeforeAndAfter.Title>
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>기존</BeforeAndAfter.Before>
          <BeforeAndAfter.After>변경</BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
    </Row>
  );
};

export default PreviewHeader;
