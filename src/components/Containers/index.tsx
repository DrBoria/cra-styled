import styled, { css } from 'styled-components';

import { devices } from 'styles/baseTheme';
import {
  TWithBasicElementOffsets,
  withOffsetBottom,
  withOffsetsRight,
  TFullWidth,
  withFullWidth,
} from 'styles/helpers';

type TContainersProps = {
  className?: string;
  style?: any;
};

type TSectionProps = {
  noHeightLimit?: boolean;
} & TContainersProps;

/**
 * @visibleName Containers
 */

const WithoutHeightLimit = (noHeightLimit?: boolean) =>
  noHeightLimit &&
  css`
    height: auto;
    min-height: ${({ theme }) => `calc(${theme.screens.tablet.height} - ${theme.elements.header.height})`};
    max-height: unset;
  `;

// Use this conteiner for wrapping any section on page
// No usage restrictions
export const BasicSection = styled.div<TSectionProps>`
  height: ${({ theme }) => `calc(${theme.screens.mobile.height}px - ${theme.elements.header.height})`};
  max-height: ${({ theme }) => `calc(${theme.screens.desktop.height} - ${theme.elements.header.height})`};
  padding: ${({ theme: { offsets } }) => offsets.section};

  background-color: ${({ theme }) => theme.colors.section};

  @media ${devices.tablet} {
    height: ${({ theme }) => `calc(${theme.screens.tablet.height} - ${theme.elements.header.height})`};
  }
  @media ${devices.desktop} {
    height: ${({ theme }) => `calc(${theme.screens.desktop.height} - ${theme.elements.header.height})`};
    padding: ${({ theme }) => `${theme.offsets.section} ${theme.offsets.container}`};
  }

  ${({ noHeightLimit }) => WithoutHeightLimit(noHeightLimit)}
`;

// Use this container for wrapping all page content
// Should be used only once per page
export const PageContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.offsets.container};
  padding-top: ${({ theme }) => theme.elements.header.height};
`;

export const HeadingContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  width: 40%;

  text-align: left;

  ${withFullWidth}
  margin-right: ${withOffsetsRight};
  margin-bottom: ${withOffsetBottom};
`;
