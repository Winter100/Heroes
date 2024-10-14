"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
  { name: "상한 조회", href: "/raid" },
  { name: "장비 세팅", href: "/preview" },
];

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="flex h-10 w-full items-center justify-center rounded-lg bg-backgroundOne shadow-sm">
      <nav className="flex h-full w-full max-w-7xl flex-row">
        <div className="flex w-full flex-1 items-center justify-center gap-10 font-sans text-xs">
          {link.map((l) => (
            <Link
              className={`${pathName.includes(l.href) ? "text-blue-300" : ""}`}
              key={l.name}
              href={l.href}
            >
              {l.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
