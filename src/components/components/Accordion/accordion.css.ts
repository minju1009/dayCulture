import { style } from '@vanilla-extract/css';

export const container = style({
  fontSize: '18px',
  color: '#2F2F2F',
  width: '100%',
  borderRadius: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 4px 6px rgba(0,0,0,0.03)',
  border: 'none',
  cursor: 'pointer',
});

export const openedContainer = style({
  boxShadow: '0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%)',
  borderRadius: '24px',
  backgroundColor: 'white',
  padding: '8px 24px 26px',
});

export const title = style({
  fontSize: '22px',
  color: '#222222',
});

export const closedContainer = style({
  backgroundColor: 'white',
  padding: '24px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 500,
  borderRadius: 16,
});

export const filterTitle = style({
  fontSize: '14px',
  color: '#717171',
});

export const filterDescription = style([
  filterTitle,

  {
    width: '75%',
    color: '#222222',
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
]);
