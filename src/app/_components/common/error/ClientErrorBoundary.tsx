'use client';

import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

type ClientErrorBoundaryProps = {
  children: ReactNode;
};

const ClientErrorBoundary = ({ children }: ClientErrorBoundaryProps) => (
  <ErrorBoundary
    fallbackRender={({ resetErrorBoundary }) => (
      <ErrorFallback onRetry={() => resetErrorBoundary()} />
    )}
  >
    {children}
  </ErrorBoundary>
);

export default ClientErrorBoundary;
