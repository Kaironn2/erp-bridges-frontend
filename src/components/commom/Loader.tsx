import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const loaderVariants = cva(
  'rounded-full bg-primary-foreground animate-bounce',
  {
    variants: {
      size: {
        sm: 'w-2 h-2',
        md: 'w-3 h-3',
        lg: 'w-4 h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-row gap-2', className)}
        ref={ref}
        {...props}
      >
        <div className={cn(loaderVariants({ size }))}></div>
        <div
          className={cn(loaderVariants({ size }), '[animation-delay:-.3s]')}
        ></div>
        <div
          className={cn(loaderVariants({ size }), '[animation-delay:-.5s]')}
        ></div>
      </div>
    );
  }
);
Loader.displayName = 'Loader';

export { Loader };
