import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/vars.css';

export const titleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  margin: '10px 0',
});

export const tab = style({
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  padding: '5px 10px',
  backgroundColor: vars.colors.gray,
  borderRadius: '10px',
});
export const title = style({
  color: 'black',
  fontSize: '16px',
  fontWeight: 'bold',
  display: 'block',
  margin: '30px 0 10px',
});

export const selectedTitle = style([
  tab,
  {
    backgroundColor: 'black',
  },
]);

export const filter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  border: `1px solid ${vars.colors.lightGray}`,
  gap: '20px',
  fontSize: '14px',
  fontWeight: 'bold',
  borderRadius: '18px',
  cursor: 'pointer',
  boxShadow: '2px 2px 10px -7px #595959',
});
