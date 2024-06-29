export const flexBox = (jc: string = 'center', ai: string = 'center') => ({
  display: 'flex',
  justifyContent: jc,
  alignItems: ai,
});

export const columnFlexBox = (jc: string = 'center', ai: string = 'center') => ({
  display: 'flex',
  justifyContent: jc,
  alignItems: ai,
  flexDirection: 'column',
});
