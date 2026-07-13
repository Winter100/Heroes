'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navMain = [
  {
    title: '조회',
    nav: [
      { title: '캐릭터 조회', url: '/character' },
      { title: '상한 조회', url: '/raid' },
      { title: '골드 거래소 조회', url: '/gold' },
    ],
  },
  {
    title: '세팅',
    nav: [{ title: '캐릭터 세팅', url: '/preview' }],
  },
  {
    title: '정보',
    nav: [
      { title: '인챈트 정보', url: '/market/enchant' },
      { title: '아이템 정보', url: '/iteminfo' },
      { title: '레이드 정보', url: '/raidinfo' },
    ],
  },
];

const TopNavbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full items-center justify-between rounded-md p-2">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            H
          </span>
          <span className="text-base tracking-tight">망스비</span>
        </Link>

        {/* PC Nav */}
        <NavigationMenu className="hidden flex-1 md:flex">
          <NavigationMenuList>
            {navMain.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="min-w-36 text-lg font-bold text-white">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-36">
                  {item.nav.map((nav) => (
                    <NavigationMenuLink
                      render={<Link href={nav.url} />}
                      key={nav.url}
                      className={cn(
                        pathname === nav.url ? 'text-blue-300' : ''
                      )}
                    >
                      {nav.title}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div aria-hidden="true" className="hidden md:flex"></div>

        {/* Mobile Nav */}
        <NavigationMenu className="flex flex-1 md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu className="h-5 w-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {navMain.map((item) => (
                  <div key={item.title}>
                    {item.nav.map((nav) => (
                      <NavigationMenuLink
                        render={<Link href={nav.url} />}
                        key={nav.url}
                        className={cn(
                          pathname === nav.url ? 'text-blue-300' : ''
                        )}
                      >
                        {nav.title}
                      </NavigationMenuLink>
                    ))}
                  </div>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default TopNavbar;
