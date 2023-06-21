import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, #__next', {
  height: '100vh',
  overflowY:'auto',
  boxSizing: 'border-box',
  fontFamily: 'Segoe UI',
  display: 'flex',
  flexDirection: 'column',
});
