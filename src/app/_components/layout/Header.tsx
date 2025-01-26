"use client";

import { VscMenu } from "react-icons/vsc";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const link = [
  { name: "상한 조회", href: "/raid" },
  { name: "장비 세팅", href: "/preview" },
  { name: "골드 거래소 순위", href: "/gold" },
  { name: "인챈트 정보", href: "/market/enchant" },
];

const Header = () => {
  const pathName = usePathname();
  return (
    <header className="flex h-10 w-full items-center justify-center rounded-lg bg-backgroundOne">
      <nav className="flex h-full w-full max-w-7xl flex-row">
        <div className="flex h-full w-full flex-row items-center justify-between sm:hidden">
          <div className="px-4">망디</div>
          <Menu>
            <MenuButton className="z-50 h-full px-10 text-3xl text-white">
              <VscMenu />
            </MenuButton>
            <MenuItems
              className="z-50 mt-1 h-2/4 w-40 rounded-md bg-backgroundOne px-2 text-sm text-white hover:bg-none"
              anchor="bottom"
            >
              {link.map((l) => (
                <MenuItem key={l.name}>
                  <a
                    className={`${pathName.includes(l.href) ? "text-blue-300" : ""} mt-1 block py-2 data-[focus]:text-blue-100`}
                    href={l.href}
                  >
                    {l.name}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        <div className="hidden w-full flex-1 items-center justify-center gap-10 font-sans text-xs sm:flex">
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
