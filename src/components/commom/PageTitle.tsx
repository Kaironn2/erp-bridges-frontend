import clsx from 'clsx';
import React from 'react';

type PageTitleProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  titleClasses?: string;
};

export function PageTitle({
  icon,
  title,
  titleClasses: classes,
  description,
}: PageTitleProps) {
  return (
    <>
      <div
        className={clsx('flex items-center gap-4 text-2xl font-semibold', {
          classes,
        })}
      >
        {icon}
        <h1>{title}</h1>
      </div>
      <p className="text-muted dark:text-muted-foreground/80">{description}</p>
    </>
  );
}
