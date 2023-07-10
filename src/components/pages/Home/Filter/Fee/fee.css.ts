import { style } from '@vanilla-extract/css';

export const feeOptionsWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '4px',
});

export const feeOption = style({
  display: 'block',
  border: '1px solid #DDDDDD',
  width: '33%',
  textAlign: 'center',
  padding: '10px 6px',
  borderRadius: '8px',
  fontSize: '14px',
  backgroundColor: 'white',
});

export const selectedFeeOption = style([
  feeOption,
  {
    border: '1px solid black',
    color: 'white',
    backgroundColor: 'black',
  },
]);
