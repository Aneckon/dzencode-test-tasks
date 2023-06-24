import { Header } from '@/components/header';
import { Navbar } from '@/components/navbar';

import '@/styles/globals.scss';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="wrapper">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
