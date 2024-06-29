import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme.css';
import { typo } from '../../styles/typo';
import { flexBox } from '../../styles/mixins';
export const Container = style({
  color: theme.color.text,
  ...flexBox(),
});

export const P = style({
  marginTop: '60px',
  ...typo.large,
  color: theme.color.defaultRed,
});
