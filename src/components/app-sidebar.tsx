"use client";

import * as React from "react";
import {
  AudioWaveform,
  Book,
  CalendarSearch,
  Command,
  GalleryVerticalEnd,
  House,
  ListOrdered,
  Pickaxe,
  PiggyBank,
  Search,
  Table,
  UserRoundPen,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavEvent } from "./nav-event";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navHome: [
    {
      title: "홈",
      url: "/",
      icon: House,
    },
  ],
  navMain: [
    {
      title: "캐릭터 조회",
      url: "/character",
      icon: Search,
    },
    {
      title: "캐릭터 세팅",
      url: "/preview",
      icon: UserRoundPen,
    },
    {
      title: "상한 조회",
      url: "/raid",
      icon: Table,
    },
    {
      title: "랭킹 조회",
      url: "/rank",
      icon: ListOrdered,
    },
  ],
  navInfo: [
    {
      title: "인챈트",
      url: "/market/enchant",
      icon: Book,
    },
    {
      title: "아이템 제작",
      url: "/iteminfo",
      icon: Pickaxe,
    },
    {
      title: "아이템 드랍",
      url: "/raid/drop",
      icon: PiggyBank,
    },
  ],
  navNotice: [
    {
      title: "이벤트",
      url: "/market/enchant",
      icon: CalendarSearch,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navHome} label="" />
        <NavMain items={data.navMain} label="검색" />
        <NavMain items={data.navInfo} label="정보" />
        <SidebarSeparator className="mx-0" />
        <NavEvent items={data.navNotice} label="" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
