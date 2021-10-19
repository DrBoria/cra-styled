import { css } from 'styled-components';
import { Theme } from 'styles/base';

export type WithBasicElementOffsets = {
  /** added offset right by multiplying theme baseOffset variable */
  offsetRight?: boolean | number;
  /** added offset bottom by multiplying theme baseOffset variable */
  offsetBottom?: boolean | number;
};

// Every element can have only right and bottom offsets
export const withBasicElementOffsets = css`
  box-sizing: border-box;

  ${({ offsetRight, theme }: WithBasicElementOffsets & { theme: Theme }) =>
    offsetRight && `margin-right: ${theme.offsets.basic * Number(offsetRight)}px`};

  ${({ offsetBottom, theme }: WithBasicElementOffsets & { theme: Theme }) =>
    offsetBottom && `margin-bottom: ${theme.offsets.basic * Number(offsetBottom)}px`};
`;
