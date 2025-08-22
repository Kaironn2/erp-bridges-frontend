import clsx from 'clsx';
import Image from 'next/image';
import Logo from '@/assets/erp-bridges-logo.svg';

type AuthContainerProps = {
  children: React.ReactNode;
};

export function AuthContainer({ children }: AuthContainerProps) {
  const leftContainerClasses = clsx(
    'hidden md:flex',
    'md:w-3/5 lg:w-7/10',
    'text-white',
    'bg-gradient-to-br from-primary to-secondary',
    'flex flex-col items-center justify-center',
    'gap-4 px-16'
  );
  const rightContainerClasses = clsx(
    'w-full md:w-2/5 lg:w-3/10',
    'bg-bg-primary',
    'flex items-center justify-center'
  );
  const titleClasses = clsx(
    'text-center font-extrabold',
    'md:text-6xl',
    'lg:text-7xl',
    'xl:text-8xl'
  );

  return (
    <div className="flex min-h-screen">
      <div className={leftContainerClasses}>
        <Image
          src={Logo}
          alt="Erp Bridges logo"
          priority
          height={600}
          width={600}
        />
        <h1 className={titleClasses}>ERP Bridges</h1>
      </div>

      <div className={rightContainerClasses}>
        <div className="p-6 w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
