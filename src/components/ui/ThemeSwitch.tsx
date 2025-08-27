'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Sun, Moon } from 'lucide-react';

import { cn } from '@/lib/utils';

const ThemeSwitch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full',
      'border-2 transition-colors focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'bg-primary/80 hover:border hover:border-primary/80',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none relative block h-5 w-5 rounded-full bg-background',
        'shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        'flex items-center justify-center'
      )}
    >
      <Sun className="h-3 w-3 text-foreground transition-all scale-100 dark:scale-0" />
      <Moon className="absolute h-3 w-3 text-foreground transition-all scale-0 dark:scale-100" />
    </SwitchPrimitive.Thumb>
  </SwitchPrimitive.Root>
));
ThemeSwitch.displayName = SwitchPrimitive.Root.displayName;

export { ThemeSwitch };
