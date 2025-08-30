'use client';

import { useAuthStore } from '@/store/use-auth-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from '../commom/Spinner';

type AuthGuardProps = {
  children: React.ReactNode;
};

function FullPageLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <Spinner size={'lg'} />
    </div>
  );
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && isAuthenticated) {
      router.push('/');
    }
  }, [isClient, isAuthenticated, router]);

  if (!isClient) {
    return <FullPageLoader />;
  }

  if (isClient && isAuthenticated) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
}
