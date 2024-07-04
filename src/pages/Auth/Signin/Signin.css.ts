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
  width: '30%',
  height: '60%',
  margin: '0 auto',
  padding:'40px',
  // alignItems:'center'
});

export const Title = style({
  marginBottom: '150px'
})

export const Input = style({
  padding: '6px 9px',
  // borderRadius: '8px',
  width:'100%',
  border:'none',
  borderBottom: '1px solid #E1E1E1'
});

export const Form = style({
  display:'grid',
  gap:'30px'
})

export const Label = style({
  fontSize:'14px',
  marginBottom:'4px'
})

export const Button = style({
  width: '100%',
  background:'#4A2C9C',
  borderRadius:'8px',
  border:'none',
  height:'44px',
  color:'white',
  
})