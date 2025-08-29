'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const MotionThumb = motion.create(SwitchPrimitive.Thumb);

const ThemeSwitch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      'peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full',
      'border-2 transition-colors focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'data-[state=checked]:justify-end',
      'bg-primary/80 hover:border hover:border-primary/80',
      className
    )}
    {...props}
    ref={ref}
  >
    <MotionThumb
      className={cn(
        'pointer-events-none relative block h-6 w-6 rounded-full bg-background',
        'shadow-lg ring-0',
        'flex items-center justify-center'
      )}
      layout
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    >
      <Sun className="h-4 w-4 text-foreground transition-all scale-100 dark:scale-0" />
      <Moon className="absolute h-4 w-4 text-foreground transition-all scale-0 dark:scale-100" />
    </MotionThumb>
  </SwitchPrimitive.Root>
));
ThemeSwitch.displayName = SwitchPrimitive.Root.displayName;

export { ThemeSwitch };
