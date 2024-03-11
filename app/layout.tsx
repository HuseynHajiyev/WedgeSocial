import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Wedge',
  description: 'Wedge your way into the flock',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-dark-blue-800 dark:text-white'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
