'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { ThemeSwitch } from './ui/ThemeSwitch';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === 'dark';

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <ThemeSwitch
        checked={isDarkMode}
        onCheckedChange={handleThemeChange}
        aria-label="Alterar tema"
      />
    </div>
  );
}
