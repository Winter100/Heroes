import AdBanner from '@/app/_components/adsense/AdBanner';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemRecipeTableBack from '@/app/_features/iteminfo/components/item-recipe-table-back';
import type { ReactNode } from 'react';

type DetailPageLayoutProps = {
  children: ReactNode;
};

const DetailPageLayout = ({ children }: DetailPageLayoutProps) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
      <AdBanner />
      <RoundedContainer className="h-14 bg-muted/50 px-4 font-semibold">
        <ItemRecipeTableBack />
      </RoundedContainer>
      <RoundedContainer className="flex min-h-0 flex-1 flex-col gap-4 p-0">
        {children}
      </RoundedContainer>
    </div>
  );
};

export default DetailPageLayout;
