import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';
import { columnFlexBox } from '../../../styles/mixins';
export const Container = style({
  boxShadow: theme.shadow.basic,
  ...columnFlexBox(),
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '400px',
  margin: '0 auto',
});
