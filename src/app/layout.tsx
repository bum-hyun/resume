import './globals.css';

import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '이력서 - 김범현',
  description: '프론트엔드 개발자 김범현입니다.',
  openGraph: {
    title: '이력서 - 김범현',
    type: 'website',
    url: 'https://bum-hyun.github.io/resume',
    image: '/resume/profile.jpeg',
    description: '프론트엔드 개발자 김범현입니다.',
    locale: 'ko_KR',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
