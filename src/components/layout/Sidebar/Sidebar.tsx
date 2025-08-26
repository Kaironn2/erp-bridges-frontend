'use client';

import { useUIStore } from '@/store/use-ui-store';
import { Button } from '@/components/ui/button';
import { ChevronsLeft, X } from 'lucide-react';
import clsx from 'clsx';
import { ErpBrdigesLogo } from '../../branding/ErpBridgesLogo';
import Link from 'next/link';
import { AccordionMenu } from './AccordionMenu';

export function Sidebar() {
  const {
    isSidebarOpen,
    toggleSidebar,
    isSidebarCollapsed,
    toggleSidebarCollapsed,
  } = useUIStore();

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-50',
          'flex h-screen flex-col border-r bg-card text-card-foreground',
          'transition-transform duration-300 md:sticky md:top-0 md:translate-x-0',
          {
            'translate-x-0': isSidebarOpen,
            '-translate-x-full': !isSidebarOpen,
            'md:w-64': !isSidebarCollapsed,
            'md:w-24': isSidebarCollapsed,
          }
        )}
      >
        <div
          className={clsx('flex h-16 items-center border-b px-4', {
            'justify-between': !isSidebarCollapsed,
            'justify-center': isSidebarCollapsed,
          })}
        >
          <Link href={'/'} className="flex justify-center items-center gap-2">
            <ErpBrdigesLogo width={50} height={50} />
            <h1
              className={clsx('text-lg font-bold', {
                hidden: isSidebarCollapsed,
              })}
            >
              ERP Bridges
            </h1>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={toggleSidebarCollapsed}
          >
            <ChevronsLeft
              className={clsx('h-5 w-5 transition-transform', {
                'rotate-180': isSidebarCollapsed,
              })}
            />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <AccordionMenu isCollapsed={isSidebarCollapsed} />
        </nav>
      </aside>
    </>
  );
}
