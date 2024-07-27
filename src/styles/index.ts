import { css } from '@styled-system/css';

export const bodyStyles = css({
  height: 'full',
  display: 'flex',
  flexDir: 'column',
});

export const mainStyles = css({
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const divStyles = css({
  w: 'full',
  paddingInline: '8',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8',
});
