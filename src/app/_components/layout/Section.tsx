import clsx from 'clsx';
import { ComponentProps } from 'react';

const Section = ({
  children,
  className,
  ...props
}: ComponentProps<'section'>) => {
  return (
    <section
      className={clsx(
        'flex h-full w-full flex-col rounded-lg p-2 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
