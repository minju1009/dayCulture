import { globalStyle } from '@vanilla-extract/css';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: [],
  weight: ['400', '700'],
  variable: '--noto-sans_KR',
  fallback: ['system-ui'],
});

globalStyle('html, body, #__next', {
  height: '100vh',
  overflowY: 'auto',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: notoSansKr,
});
