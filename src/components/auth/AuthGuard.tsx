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
  const { isAuthenticated, verifyAuth } = useAuthStore();
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      await verifyAuth();
      setIsVerifying(false);
    };

    checkToken();
  }, [verifyAuth]);

  useEffect(() => {
    if (!isVerifying && isAuthenticated) {
      router.push('/');
    }
  }, [isVerifying, isAuthenticated, router]);

  if (isVerifying) {
    return <FullPageLoader />;
  }

  if (!isVerifying && isAuthenticated) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
}
