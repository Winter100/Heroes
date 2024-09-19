import { ComponentProps } from 'react';

interface MainSectionProps extends ComponentProps<'main'> {}

const MainSection = ({ children, ...props }: MainSectionProps) => {
  return <main {...props}>{children}</main>;
};

export default MainSection;
