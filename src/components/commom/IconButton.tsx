import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Spinner } from './Spinner';
import { Loader } from './Loader';

const iconButtonVariants = cva(
  'group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md px-6 text-sm font-medium duration-300 cursor-pointer whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary/80 text-primary-foreground hover:bg-primary',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
  isLoading?: boolean;
  loadingChildren?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      children,
      icon,
      isLoading = false,
      loadingChildren,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            {loadingChildren || (
              <>
                <Loader size={'sm'} />
              </>
            )}
          </div>
        ) : (
          <>
            <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
              {children}
            </div>
            <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {icon}
            </div>
          </>
        )}
      </button>
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
