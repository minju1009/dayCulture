import { style } from '@vanilla-extract/css';

export const optionsWrap = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '6px',
});

export const option = style({
  margin: '4px 0',
  padding: '6px 12px',
  border: '1px solid #DDDDDD',
  cursor: 'pointer',
  textAlign: 'center',
  fontSize: '14px',
  borderRadius: '15px',
  backgroundColor: 'white',
});

export const selectedOption = style([
  option,
  {
    border: '1px solid black',
    color: 'white',
    backgroundColor: 'black',
  },
]);
