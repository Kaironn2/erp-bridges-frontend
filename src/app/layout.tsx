import { ThemeProvider } from '@/components/theme-provider';
import { lexend } from './fonts';
import './globals.css';
import { Metadata } from 'next';

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
