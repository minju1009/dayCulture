import { createGlobalTheme, createThemeContract, createTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme('body', {
  colors: {
    gray: '#808080',
    lightGray: '#dddddd',
  },
});
