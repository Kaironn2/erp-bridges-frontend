'use client';

import { useTheme } from 'next-themes';
import { ThemeSwitch } from './commom/ThemeSwitch';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

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
