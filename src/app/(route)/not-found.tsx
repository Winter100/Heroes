import Image from "next/image";
import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import Header from "../_components/layout/Header";

const NoutFound = () => {
  return (
    <div className="h-dvh">
      <div className="fixed w-full">
        <Header />
      </div>
      <Section className="flex flex-1 items-center justify-center">
        <Column className="m-auto h-full w-full justify-center gap-2">
          <div className="flex h-24 justify-center">
            <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-br-lg rounded-tl-lg rounded-tr-lg bg-backgroundOne p-4 text-white">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="mx-auto text-center text-2xl font-semibold">
                  404
                </span>
              </div>
              <p className="py-2.5 text-center text-sm font-normal">
                찾을 수 없는 페이지입니다.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={"/images/npc/ray.png"}
              width={400}
              height={400}
              alt="NotFound"
            />
          </div>
        </Column>
      </Section>
    </div>
  );
};

export default NoutFound;
