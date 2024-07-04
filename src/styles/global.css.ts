import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  // backgroundColor: theme.color.background,
  color: theme.color.text,

});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('*', {
  boxSizing: 'border-box',
});
