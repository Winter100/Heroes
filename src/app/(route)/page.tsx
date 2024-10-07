import Link from "next/link";

const link = [
  { name: "상한 조회", href: "/raid" },
  { name: "장비 세팅", href: "/preview" },
];

const Page = () => {
  return (
    <div className="flex h-full justify-center py-72">
      <div className="flex cursor-default flex-col gap-4">
        <h1 className="text-center font-sans text-7xl">망디</h1>
        <div className="text-xs">
          <p>마비노기 영웅전 캐릭터를 조회하고 장비를 세팅해보세요!</p>
        </div>
        <div className="my-28 flex flex-col items-center justify-center gap-5">
          {link.map((item) => (
            <Link
              className="border-borderColor flex h-8 w-24 items-center justify-center rounded-lg border text-sm hover:text-blue-300"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
