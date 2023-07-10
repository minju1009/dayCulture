import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/vars.css';

export const container = style({
  width: '100vw',
  padding: '10px',
  height: '100vh',
  backgroundColor: '#F7F7F7',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const contentWrap = style({
  padding: '20px 10px',
  height: '100%',
});
export const filterWrap = style({
  width: '100%',
});

export const title = style({
  width: '100%',
});

export const closeBtn = style({
  display: 'inline-block',
  padding: '5px 10px',
  borderRadius: '50%',
  border: `1px solid ${vars.colors.lightGray}`,
  backgroundColor: 'white',
  cursor: 'pointer',
});

export const accordionContainer = style({
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
});

export const buttonWrap = style({
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const cancelBtn = style({
  display: 'block',
  textAlign: 'center',
  fontSize: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  textDecoration: 'underline',
  color: '#222222',
});

export const confirmBtn = style({
  display: 'block',
  padding: '14px',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '8px',
  fontSize: '20px',
});
