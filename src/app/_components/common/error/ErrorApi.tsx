import React from 'react';
import ErrorDisplay from './ErrorDisplay';

const ErrorApi = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ErrorDisplay
      content={
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col gap-2 text-center text-xs text-red-100">
            {children && children}
            <p>서버 점검이나 일시적인 오류로 데이터를 불러오지 못했습니다.</p>
            <p>잠시 후 다시 시도해 주세요.</p>
          </div>
        </div>
      }
    />
  );
};

export default ErrorApi;
