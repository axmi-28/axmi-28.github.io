import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Personal website — four design studies',
  description: 'Four minimal directions for a personal website. All content is placeholder.',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
