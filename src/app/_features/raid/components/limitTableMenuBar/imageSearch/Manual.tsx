import Image from 'next/image';

const Manual = () => {
  return (
    <div className="text-gray-400">
      <h3 className="text-center text-white">사용 방법</h3>
      <ol className="flex flex-col items-start justify-start text-sm">
        <li>1. shift + window + s를 눌러 캡처모드로 진입합니다.</li>
        <li>2. 이름만 나오도록 범위를 지정한 후 추출하기 버튼을 클릭합니다.</li>
        <li>3. 틀린 이름을 수정하고 검색합니다.</li>
      </ol>

      <div className="flex w-full flex-col items-center justify-center gap-2 text-2xl">
        <div className="flex flex-row gap-2">
          <Image
            src={'/images/ex1.png'}
            width={180}
            height={100}
            alt="범위 예제1"
          />
          <Image
            src={'/images/ex2.png'}
            width={180}
            height={100}
            alt="범위 예제2"
          />
        </div>
      </div>
    </div>
  );
};

export default Manual;
