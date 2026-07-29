import React from 'react';

const ItemTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="rounded bg-slate-800 px-1.5 py-0.5 text-xs text-slate-400">
      {children}
    </span>
  );
};

export default ItemTag;
