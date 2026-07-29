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
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

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
    <header className="sticky top-0 z-50 mt-6 w-full border-y border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full items-center justify-between rounded-md p-3">
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
                <NavigationMenuTrigger className="min-w-36 font-bold text-white">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-36 rounded-sm bg-muted/50">
                  {item.nav.map((nav) => (
                    <NavigationMenuLink
                      render={<Link href={nav.url} />}
                      key={nav.url}
                      className={cn(
                        isActiveRoute(pathname, nav.url) ? 'text-blue-300' : ''
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
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 p-0">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle>메뉴</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col py-4">
              {navMain.map((group) => (
                <div key={group.title} className="mb-6">
                  <div className="px-6 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.title}
                  </div>

                  <div className="flex flex-col">
                    {group.nav.map((nav) => (
                      <SheetClose asChild key={nav.url}>
                        <Link
                          href={nav.url}
                          className={cn(
                            'mx-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                            isActiveRoute(pathname, nav.url)
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted'
                          )}
                        >
                          {nav.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default TopNavbar;

export function isActiveRoute(pathname: string, navUrl: string): boolean {
  if (navUrl === '/') {
    return pathname === '/';
  }

  return pathname === navUrl || pathname.startsWith(`${navUrl}/`);
}
