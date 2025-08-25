import { Header } from '@/components/layout/Header';
import { MainContainer } from '@/components/layout/MainContainer';
import { Sidebar } from '@/components/layout/Sidebar';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <MainContainer>
        <Header />

        <div className="flex-1 p-6">{children}</div>
      </MainContainer>
    </div>
  );
}
