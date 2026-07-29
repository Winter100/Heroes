'use client';
const Error = ({ error }: { error: Error; reset: () => void }) => {
  console.error('error', error.message);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-2 text-red-300">
      <h1>알 수 없는 오류</h1>
      <span>잠시 후 다시 시도해주세요.</span>
    </div>
  );
};

export default Error;
