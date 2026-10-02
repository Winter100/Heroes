'use client';

import { Button } from '@/components/ui/button';

type ErrorFallbackProps = {
  onRetry: () => void;
};

const ErrorFallback = ({ onRetry }: ErrorFallbackProps) => (
  <div
    role="alert"
    className="flex min-h-[240px] flex-col items-center justify-center gap-3 px-4 text-center"
  >
    <h2 className="text-lg font-semibold text-red-300">문제가 발생했습니다.</h2>
    <p className="text-sm text-slate-300">잠시 후 다시 시도해 주세요.</p>
    <Button type="button" variant="outline" onClick={onRetry}>
      다시 시도
    </Button>
  </div>
);

export default ErrorFallback;
