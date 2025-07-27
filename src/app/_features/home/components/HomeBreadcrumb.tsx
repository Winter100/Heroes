'use client';
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

const activePathName = (pathName: string) => {
  if (pathName === '/') return '망스비';
  if (pathName === '/character') return '캐릭터 조회';
  if (pathName === '/preview') return '캐릭터 세팅';
  if (pathName === '/raid') return '상한 조회';
  if (pathName === '/gold') return '골드 거래소 조회';
  if (pathName === '/market/enchant') return '인챈트 정보';
  if (pathName === '/iteminfo') return '아이템 제작 정보';
  if (pathName === '/raidinfo') return '레이드 정보';
};

const HomeBreadcrumb = () => {
  const pathName = usePathname();
  const breadcrumb = activePathName(pathName);
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="block cursor-default">
              <BreadcrumbLink>{breadcrumb}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default HomeBreadcrumb;
