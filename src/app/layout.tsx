import { ThemeProvider } from '@/components/theme-provider';
import { lexend } from './fonts';
import './globals.css';
import { Metadata } from 'next';
import Providers from './providers';

export const metadata: Metadata = {
  title: {
    default: 'ERP Bridges',
    template: '%s | ERP Bridges',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${lexend.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
