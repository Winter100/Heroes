'use client';

import * as React from 'react';
import {
  BadgeCent,
  Book,
  House,
  Pickaxe,
  PiggyBank,
  Search,
  Table,
  UserRoundPen,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';

const data = {
  navHome: [
    {
      title: '홈',
      url: '/',
      icon: House,
    },
  ],
  navMain: [
    {
      title: '캐릭터 조회',
      url: '/character',
      icon: Search,
    },
    {
      title: '캐릭터 세팅',
      url: '/preview',
      icon: UserRoundPen,
    },
    {
      title: '상한 조회',
      url: '/raid',
      icon: Table,
    },
    {
      title: '골드 거래소 조회',
      url: '/gold',
      icon: BadgeCent,
    },
  ],
  navInfo: [
    {
      title: '인챈트',
      url: '/market/enchant',
      icon: Book,
    },
    {
      title: '아이템 제작',
      url: '/iteminfo',
      icon: Pickaxe,
    },
    {
      title: '레이드',
      url: '/raidinfo',
      icon: PiggyBank,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="block cursor-default text-center text-xl text-gray-400 sm:hidden">
          망스비
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navHome} label="" />
        <NavMain items={data.navMain} label="검색" />
        <NavMain items={data.navInfo} label="정보" />
        <SidebarSeparator className="mx-0" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
