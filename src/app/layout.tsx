import '@/styles/globals.scss';
import { Raleway, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-raleway',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Terraces by Anokha Estates - Luxury Villa',
  description: 'Experience unparalleled sophistication at The Terraces by Anokha Estates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${playfair.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 