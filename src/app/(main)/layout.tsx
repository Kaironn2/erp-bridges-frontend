import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header/Header';
import { MainContainer } from '@/components/layout/MainContainer';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <MainContainer>
          <Header />

          <div className="flex-1 md:p-6">{children}</div>

          <Footer />
        </MainContainer>
      </div>
    </ProtectedRoute>
  );
}
