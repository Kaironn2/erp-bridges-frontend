import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerOuterVariants = cva(
  'text-primary animate-spin flex items-center justify-center rounded-full border-transparent',
  {
    variants: {
      size: {
        sm: 'w-5 h-5 border-2 border-t-primary',
        md: 'w-10 h-10 border-4 border-t-primary',
        lg: 'w-20 h-20 border-4 border-t-primary',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const spinnerInnerVariants = cva(
  'text-secondary animate-spin flex items-center justify-center rounded-full border-transparent',
  {
    variants: {
      size: {
        sm: 'w-3 h-3 border-2 border-t-secondary',
        md: 'w-8 h-8 border-4 border-t-secondary',
        lg: 'w-16 h-16 border-4 border-t-secondary',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerOuterVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex-col gap-4 w-full flex items-center justify-center',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className={cn(spinnerOuterVariants({ size }))}>
          <div className={cn(spinnerInnerVariants({ size }))}></div>
        </div>
      </div>
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner };
