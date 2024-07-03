type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export const flexBox = (jc: string = 'center', ai: string = 'center') => ({
  display: 'flex',
  justifyContent: jc,
  alignItems: ai,
});

export const columnFlexBox = (jc: JustifyContent = 'center', ai: AlignItems = 'center') => ({
  display: 'flex' as const,
  justifyContent: jc,
  alignItems: ai,
  flexDirection: 'column' as FlexDirection,
});
