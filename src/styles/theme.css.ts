import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    main: '#ffa726',
    background: '#fafaf5',
    defaultRed: '#ff2663',
    defaultBlue: '#2655ff',
    text: '#36202e',
  },
  fontSizing: {
    T1: '32',
    T2: '24',
    T3: '18',
    T4: '14',
    T5: '24',
    P1: '12',
  },
  spacing: {
    small: '5',
    medium: '10',
    big1: '20',
  },
  font: {
    body: 'arial',
  },
  shadow: {
    basic: '4px 4px 8px 0px rgba(34,60,80, 0.2)',
  },
});
