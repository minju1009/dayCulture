import { style } from '@vanilla-extract/css';

export const navContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  ':first-child': {
    paddingLeft: '10px',
  },

  ':last-child': {
    paddingRight: '20px',
  },
});

export const navMenu = style({
  fontSize: '25px',
  color: 'black',
  cursor: 'pointer',
});

export const mainContainer = style({
  flex: 1,
});

export const footer = style({
  padding: '15px 0',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  zIndex: 1,
  backgroundColor: 'white',
});
