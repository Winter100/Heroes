'use client';

import { useCategory } from '@/app/_hooks/custom/useCategory';
import Link from 'next/link';

const SuspenseItem = ({
  link,
  path,
  children,
  className,
}: {
  link: string;
  path: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { handleSelectItem } = useCategory(path);

  return (
    <Link className={className} href={handleSelectItem(link)}>
      {children}
    </Link>
  );
};

export default SuspenseItem;
