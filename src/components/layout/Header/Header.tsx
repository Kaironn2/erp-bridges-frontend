'use client';

import { Button } from '@/components/ui/button';
import { useUIStore } from '@/store/use-ui-store';
import { Bell, Menu } from 'lucide-react';
import { ModeToggle } from '../../mode-toggle';
import { LogoutButton } from '../../auth/LogoutButton';
import { UserProfileHeader } from './UserProfileHeader';

export function Header() {
  const { toggleSidebar } = useUIStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div className="flex flex-row items-center gap-4">
        <ModeToggle />
        <Bell />
        <UserProfileHeader userName="Jonh" userRole="RPA Developer" />
      </div>
    </header>
  );
}
