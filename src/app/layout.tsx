import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이력서 - 김범현',
  description: '프론트엔드 개발자 김범현입니다.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
