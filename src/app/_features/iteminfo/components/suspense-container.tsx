'use client';

import { Suspense } from 'react';
import SuspenseItem from './suspense-item';

const SuspenseContainer = ({
  link,
  path,
  className,
  children,
}: {
  link: string;
  path: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Suspense fallback={null}>
      <SuspenseItem className={className} link={link} path={path}>
        {children}
      </SuspenseItem>
    </Suspense>
  );
};

export default SuspenseContainer;
