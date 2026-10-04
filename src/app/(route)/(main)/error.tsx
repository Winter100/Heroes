'use client';

import ErrorFallback from '@/app/_components/common/error/ErrorFallback';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ reset }: ErrorProps) => <ErrorFallback onRetry={reset} />;

export default Error;
