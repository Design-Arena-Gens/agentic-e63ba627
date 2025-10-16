import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neomorphic Classical Login',
  description: 'Elegant neomorphic login UI with classical patterns',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
