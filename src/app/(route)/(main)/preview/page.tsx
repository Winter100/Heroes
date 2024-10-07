import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import Row from "@/app/_components/layout/Row";

import PreviewUserSearch from "@/app/_components/home/userDetailInfo/PreviewUserSearch";
import Preview from "@/app/_components/preview/Preview";
import RaidDropDownMenu from "@/app/_components/home/characterInfoPanel/menuList/RaidDropDownMenu";
import ResultModal from "@/app/_components/preview/menu/ResultModal";

const Page = ({ searchParams }: { searchParams: { name: string } }) => {
  const name = searchParams.name;

  return (
    <Section className="h-full w-full">
      <Column className="flex h-full w-full flex-1 gap-1">
        <Row className="h-8 flex-row items-center justify-between md:h-auto md:flex-row">
          <Row className="flex h-full w-full flex-1 items-center justify-center gap-1 text-xs text-white md:w-auto">
            {name && <ResultModal name={name} />}
            <RaidDropDownMenu />
          </Row>
          <Row className="w-full flex-1 items-center justify-center">
            <PreviewUserSearch />
          </Row>
          <Row className="w-full flex-1"></Row>
        </Row>
        <Preview name={name} />
      </Column>
    </Section>
  );
};

export default Page;
