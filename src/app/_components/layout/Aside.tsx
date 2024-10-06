import { ComponentProps } from "react";

interface AsideProps extends ComponentProps<"aside"> {}

const Aside = ({ children }: AsideProps) => {
  return <aside>{children}</aside>;
};

export default Aside;
