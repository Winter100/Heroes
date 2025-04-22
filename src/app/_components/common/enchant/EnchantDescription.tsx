import clsx from 'clsx';
import { ComponentProps } from 'react';

interface EnchantDescriptionProps extends ComponentProps<'div'> {
  enchantDescription: React.ReactNode;
}

const EnchantDescription = ({
  enchantDescription,
  className,
  ...props
}: EnchantDescriptionProps) => {
  return (
    <div className={clsx('w-full text-center', className)} {...props}>
      {enchantDescription}
    </div>
  );
};

export default EnchantDescription;
