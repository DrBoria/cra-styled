import { css } from 'styled-components';

export type FullWidth = {
  /** expand component into 100% width */
  fullWidth?: boolean;
};

export const withFullWidth = css`
  ${({ fullWidth }: FullWidth) => (fullWidth ? 'width: 100%' : '')};
`;
