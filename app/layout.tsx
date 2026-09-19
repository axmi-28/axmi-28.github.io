import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andy',
  description:
    'currently working on interpretability, interested in eval awareness and model diffing',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
