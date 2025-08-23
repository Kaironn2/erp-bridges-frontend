import { AuthContainer } from '@/components/auth/AuthContainer';
import { AuthGuard } from '@/components/auth/AuthGuard';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <AuthContainer>{children}</AuthContainer>
    </AuthGuard>
  );
}
