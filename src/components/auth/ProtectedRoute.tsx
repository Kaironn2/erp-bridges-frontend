'use client';

import { useAuthStore } from '@/store/use-auth-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from '../commom/Spinner';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function FullPageLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <Spinner size={'lg'} />
    </div>
  );
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
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
    if (!isVerifying && !isAuthenticated) {
      router.push('/login');
    }
  }, [isVerifying, isAuthenticated, router]);

  if (isVerifying) {
    return <FullPageLoader />;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <FullPageLoader />;
}
