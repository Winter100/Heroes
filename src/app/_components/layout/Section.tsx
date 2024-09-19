import { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  className?: string;
}

const Section = ({ children, className = "", ...props }: SectionProps) => {
  return (
    <section
      className={`flex h-full w-full flex-col rounded-lg bg-white p-2 shadow-sm ${className} `}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
