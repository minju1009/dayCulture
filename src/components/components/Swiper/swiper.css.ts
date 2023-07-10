import { style } from '@vanilla-extract/css';

export const swiper = style({
  width: '100%',
});
export const swiperSlide = style({
  width: '240px',
});

export const swiperTitle = style({
  width: '240px',
  fontSize: '18px',
  color: 'black',
  overflowWrap: 'break-word',
  lineBreak: 'normal',
});

export const swiperOverlay = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 2,
  backgroundColor: 'red',
});

export const swiperDescription = style({
  fontSize: '13px',
  marginTop: '3px',
  color: 'gray',
});
