import Link from "next/link";

const link = [
  { name: "상한 조회", href: "/" },
  { name: "장비 세팅", href: "/preview" },
];

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-center rounded-lg shadow-sm">
      <nav className="flex h-full w-full max-w-7xl flex-row">
        <div className="flex w-full flex-1 items-center justify-center gap-10 font-sans text-sm">
          {link.map((l) => (
            <Link className="hover:text-blue-300" key={l.name} href={l.href}>
              {l.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
