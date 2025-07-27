import Row from '@/app/_components/layout/Row';

const PreviewTitle = () => {
  return (
    <Row className="mt-1 h-12 gap-2 border-b border-borderColor text-center text-xs">
      <div className="flex w-12 items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
        아이템
      </div>
      <div className="w-5">{null}</div>

      <div className="flex flex-1 flex-col justify-center">
        <div>정령합성</div>
        <div className="hidden flex-col sm:flex sm:flex-row">
          <div className="w-full">기존</div>
          <div className="w-full">변경</div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <div>접두</div>
        <div className="hidden flex-col sm:flex sm:flex-row">
          <div className="w-full">기존</div>
          <div className="w-full">변경</div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <div>접미</div>
        <div className="hidden flex-col sm:flex sm:flex-row">
          <div className="w-full">기존</div>
          <div className="w-full">변경</div>
        </div>
      </div>
    </Row>
  );
};

export default PreviewTitle;
