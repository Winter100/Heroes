import ChracterData from "@/app/_components/character/ChracterData";
import RoundedContainer from "@/app/_components/layout/RoundedContainer";
import PreviewSearchBar from "@/app/_components/preview/previewSearchMenuBar/previewSearchBar/PreviewSearchBar";

const Page = () => {
  return (
    <div className="dark flex flex-1 flex-col gap-2 p-2">
      <RoundedContainer className="flex h-14 items-center justify-center">
        {/* <RoundedContainer className="flex h-14 items-center justify-center bg-muted/50"> */}
        <PreviewSearchBar className="w-full max-w-72" routeName="character" />
      </RoundedContainer>
      <ChracterData />
    </div>
  );
};

export default Page;
