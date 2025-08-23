import clsx from 'clsx';
import { ErpBrdigesLogo } from '../branding/ErpBridgesLogo';
import { ModeToggle } from '../mode-toggle';

type AuthContainerProps = {
  children: React.ReactNode;
};

export function AuthContainer({ children }: AuthContainerProps) {
  const mainContainerClasses = clsx(
    'min-h-screen w-full',
    'flex justify-center',
    'pt-10',
    'bg-background'
  );

  const authContainerClasses = clsx(
    'w-full max-w-md',
    'flex flex-col items-center',
    'p-8',
    'self-start'
  );

  return (
    <div className={mainContainerClasses}>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className={authContainerClasses}>
        <ErpBrdigesLogo width={150} height={150} withText={true} />
        <div className="p-6 w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
