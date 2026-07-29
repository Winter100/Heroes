import React from 'react';
import ErrorDisplay from './error/ErrorDisplay';

/**
 * 기본 문구
 * - 데이터를 불러올 수 없습니다.
 * - 서버 점검일 수 있으니 잠시 후 다시 시도해 주세요.
 *
 *
 * text 문구
 * - text
 */
const CheckError = ({ text }: { text?: React.ReactNode }) => {
  const content = text ? (
    text
  ) : (
    <>
      <p>데이터를 불러올 수 없습니다.</p>
      <p>서버 점검일 수 있으니 잠시 후 다시 시도해 주세요.</p>
    </>
  );
  return (
    <div className="flex h-full items-center justify-center bg-inherit text-red-100">
      <ErrorDisplay
        content={
          <div className="flex flex-col items-center justify-center gap-2">
            {content}
          </div>
        }
      />
    </div>
  );
};

export default CheckError;
