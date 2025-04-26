import { useCallback, useState } from 'react';

export const useSortKey = <T>(initialKey: keyof T) => {
  const [sortKey, setSortKey] = useState<keyof T>(initialKey);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = useCallback(
    (key: keyof T) => {
      setSortOrder((pre) =>
        sortKey === key ? (pre === 'asc' ? 'desc' : 'asc') : 'asc'
      );
      setSortKey(key);
    },
    [sortKey]
  );

  return { sortKey, sortOrder, handleSort };
};
