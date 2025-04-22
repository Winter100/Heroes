import { ComponentProps } from 'react';
import clsx from 'clsx';

interface EnchantTitleProps extends ComponentProps<'div'> {
  enchantName: string;
  isViewScrollTitle?: boolean;
}
const EnchantTitle = ({
  enchantName,
  className,
  isViewScrollTitle = true,
}: EnchantTitleProps) => {
  return (
    <div className={clsx('flex flex-row items-center gap-1', className)}>
      {enchantName}
      {isViewScrollTitle && (
        <span className="hidden lg:flex">인챈트 스크롤</span>
      )}
    </div>
  );
};

export default EnchantTitle;
