import clsx from 'clsx';

type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function MainContainer({ children, className }: MainContainerProps) {
  const containerClasses = clsx(
    'flex-1 h-screen overflow-y-auto',
    'flex flex-col',
    'bg-muted/60 dark:bg-background-muted',
    className
  );
  return <main className={containerClasses}>{children}</main>;
}
