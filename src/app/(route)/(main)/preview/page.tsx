import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import Row from "@/app/_components/layout/Row";

import PreviewUserSearch from "@/app/_components/home/userDetailInfo/PreviewUserSearch";
import Preview from "@/app/_components/preview/Preview";
import ResultModal from "@/app/_components/preview/menu/ResultModal";
import RaidLimitModal from "@/app/_components/preview/menu/RaidLimitModal";

const Page = ({ searchParams }: { searchParams: { name: string } }) => {
  const name = searchParams.name;

  return (
    <Section className="h-full w-full">
      <Column className="flex h-full w-full gap-1">
        <Row className="h-8 w-full items-center justify-between gap-1">
          <Row className="h-full w-full items-center justify-center sm:flex-1">
            <PreviewUserSearch />
          </Row>
          <Row className="flex h-full w-24 items-center justify-center gap-1">
            <RaidLimitModal />
            <ResultModal name={name} />
          </Row>
        </Row>
        <Preview name={name} />
      </Column>
    </Section>
  );
};

export default Page;
