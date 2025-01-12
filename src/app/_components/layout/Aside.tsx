import { ComponentProps } from "react";

interface AsideProps extends ComponentProps<"aside"> {}

const Aside = ({ children, ...props }: AsideProps) => {
  return <aside {...props}>{children}</aside>;
};

export default Aside;
