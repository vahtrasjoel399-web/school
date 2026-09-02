import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {title:'СпортЖурнал — посещаемость без суеты',description:'Быстрый мобильный журнал посещаемости для учителя физкультуры.'};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
